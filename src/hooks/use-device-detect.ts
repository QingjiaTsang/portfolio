"use client";

import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export function useDeviceDetect() {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isIOS: false,
    isAndroid: false,
  });

  useEffect(() => {
    const result = UAParser();

    setDeviceInfo({
      isMobile: result.device.type === "mobile",
      isIOS: result.os.name === "iOS",
      isAndroid: result.os.name === "Android",
    });
  }, []);

  return deviceInfo;
}
