"use client";

import { useState } from "react";

export type ResizePanelDensity = "comfortable" | "compact";

export const useResizePanelDensity = (
  threshold = 22,
  initialSize = 30
) => {
  const getDensity = (size: number): ResizePanelDensity =>
    size <= threshold ? "compact" : "comfortable";

  const [layoutDensity, setResizePanelDensity] = useState<ResizePanelDensity>(
    getDensity(initialSize)
  );

  const handleResize = (size: number) => {
    setResizePanelDensity((prev) => {
      const next = getDensity(size);

      return prev === next ? prev : next;
    });
  };

  return {
    layoutDensity,
    handleResize,
  };
};