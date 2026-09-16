"use client";

import { createContext, useContext, useState } from "react";

const MotionContext = createContext(null);

export default function AnalyticsMotionProvider({ children }) {
  const [paused, setPaused] = useState(false);
  return <MotionContext.Provider value={{ paused, setPaused }}>{children}</MotionContext.Provider>;
}

export function useAnalyticsMotion() {
  return useContext(MotionContext);
}
