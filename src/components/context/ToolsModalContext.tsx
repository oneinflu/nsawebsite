"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ToolType = "salary" | "roi" | "quiz" | null;

interface ToolsModalContextType {
  activeTool: ToolType;
  openTool: (tool: Exclude<ToolType, null>) => void;
  closeTool: () => void;
}

const ToolsModalContext = createContext<ToolsModalContextType | undefined>(undefined);

export const ToolsModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeTool, setActiveTool] = useState<ToolType>(null);

  const openTool = (tool: Exclude<ToolType, null>) => setActiveTool(tool);
  const closeTool = () => setActiveTool(null);

  return (
    <ToolsModalContext.Provider value={{ activeTool, openTool, closeTool }}>
      {children}
    </ToolsModalContext.Provider>
  );
};

export const useToolsModal = () => {
  const ctx = useContext(ToolsModalContext);
  if (!ctx) throw new Error("useToolsModal must be used within ToolsModalProvider");
  return ctx;
};