import * as Sentry from "@sentry/nextjs";
import { useEffect, useRef } from "react";
import { UAParser } from "ua-parser-js";

type NetworkInformation = {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
  [key: string]: any;
};

export function useVisitorTracking() {
  const initAttempts = useRef(0);
  const MAX_ATTEMPTS = 5;

  useEffect(() => {
    // 确保在客户端环境
    if (typeof window === "undefined")
      return;

    const collectVisitorInfo = async () => {
      try {
        // 等待一个短暂的时间让 Sentry 完成初始化
        await new Promise(resolve => setTimeout(resolve, 100));

        // 检查 Sentry 是否已初始化
        if (!Sentry.getClient()) {
          initAttempts.current += 1;
          if (initAttempts.current < MAX_ATTEMPTS) {
            console.warn(`Sentry 未初始化，第 ${initAttempts.current} 次重试`);
            setTimeout(collectVisitorInfo, 1000);
            return;
          }
          console.error("Sentry 初始化失败，已达到最大重试次数");
          return;
        }

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

        try {
          // 在设置用户信息之前再次检查 Sentry 状态
          if (!Sentry.getClient()) {
            throw new Error("Sentry client lost during execution");
          }

          // 直接设置用户信息
          Sentry.setUser({
            id: visitorId,
            ip_address: "{{auto}}",
            ...localeInfo,
            userAgent: navigator.userAgent,
            firstVisit: new Date().toISOString(),
          });

          // 直接设置上下文
          Sentry.setContext("device", deviceInfo);
          Sentry.setContext("performance", performanceMetrics);
          Sentry.setContext("screen", screenInfo);
          Sentry.setContext("network", networkInfo);
          Sentry.setContext("referrer", referrerInfo);
          Sentry.setContext("interaction", interactionInfo);

          // 添加面包屑
          Sentry.addBreadcrumb({
            category: "pageview",
            message: `访问页面: ${window.location.pathname}`,
            level: "info",
            data: {
              ...referrerInfo,
              timestamp: new Date().toISOString(),
            },
          });

          // 发送一个测试事件
          Sentry.captureMessage("访客追踪初始化成功", "info");
        }
        catch (sentryError) {
          console.error("Sentry 操作失败:", sentryError);
          throw sentryError; // 向上抛出错误以便外层捕获
        }
      }
      catch (error) {
        console.error("访客追踪收集失败:", error);
        if (Sentry.getClient()) {
          Sentry.captureException(error);
        }
      }
    };

    // 延迟执行以确保 Sentry 已完成初始化
    const timer = setTimeout(collectVisitorInfo, 1000);

    return () => {
      clearTimeout(timer);
      initAttempts.current = MAX_ATTEMPTS;
    };
  }, []);
}
