import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { UAParser } from "ua-parser-js";

type NetworkInformation = {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
  [key: string]: any;
};

export function useVisitorTracking() {
  useEffect(() => {
    const collectVisitorInfo = () => {
      // 基础设备信息
      const ua = new UAParser();
      const deviceInfo = {
        browser: ua.getBrowser(),
        device: ua.getDevice(),
        os: ua.getOS(),
        cpu: ua.getCPU(),
      };

      // 性能数据
      const performanceMetrics = {
        loadTime: window.performance.now(),
        navigationTiming: window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming,
        paintTiming: window.performance.getEntriesByType("paint").map(entry => ({
          name: (entry as PerformancePaintTiming).name,
          startTime: (entry as PerformancePaintTiming).startTime,
        })),
      };

      // 屏幕信息
      const screenInfo = {
        width: window.screen.width,
        height: window.screen.height,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        orientation: window.screen.orientation?.type,
      };

      // 网络信息
      const connection = (navigator as Navigator & {
        connection?: NetworkInformation;
      }).connection;

      const networkInfo = connection
        ? {
            effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,
            saveData: connection.saveData,
          }
        : {};

      // 语言和地区
      const localeInfo = {
        language: navigator.language,
        languages: navigator.languages,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      // 访问来源
      const referrerInfo = {
        referrer: document.referrer,
        url: window.location.href,
        path: window.location.pathname,
        queryParams: window.location.search,
      };

      // 用户行为
      const interactionInfo = {
        lastInteraction: new Date().toISOString(),
        sessionStartTime: new Date().toISOString(),
        isNewVisitor: !localStorage.getItem("returningVisitor"),
      };

      // 设置访客ID
      const visitorId = localStorage.getItem("visitorId")
        || Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem("visitorId", visitorId);
      localStorage.setItem("returningVisitor", "true");

      // 发送到 Sentry
      Sentry.setUser({
        id: visitorId,
        ip_address: "{{auto}}",
        ...localeInfo,
        userAgent: navigator.userAgent,
        firstVisit: new Date().toISOString(),
      });

      // 添加上下文信息
      Sentry.setContext("device", deviceInfo);
      Sentry.setContext("performance", {
        ...performanceMetrics,
        firstContentfulPaint: window.performance.getEntriesByType("paint").find(p => p.name === "first-contentful-paint"),
        largestContentfulPaint: window.performance.getEntriesByType("largest-contentful-paint")[0],
      });
      Sentry.setContext("screen", screenInfo);
      Sentry.setContext("network", networkInfo);
      Sentry.setContext("referrer", referrerInfo);
      Sentry.setContext("interaction", interactionInfo);

      // 记录访问事件
      Sentry.addBreadcrumb({
        category: "pageview",
        message: `访问页面: ${window.location.pathname}`,
        level: "info",
        data: {
          ...referrerInfo,
          timestamp: new Date().toISOString(),
        },
      });
    };

    // 延迟收集信息，避免阻塞主线程，提升 lighthouse 性能评分
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => collectVisitorInfo());
    } else {
      setTimeout(collectVisitorInfo, 2000);
    }
  }, []);
}
