import { Button } from "@/components/ui/button";
import type { ResizePanelDensity } from "@/hooks/use-resize-panel-density";
import { Bot } from "lucide-react";

type AIGenerationDropdownProps = {
  layoutDensity: ResizePanelDensity;
};

export const AIGenerationDropdown = ({
  layoutDensity,
}: AIGenerationDropdownProps) => {
  return (
    <Button className="gap-2 text-xs px-2.5 py-1 h-9">
      <Bot size={20} />

      {layoutDensity === "compact" ? "IA" : "Inteligência Artificial"}
    </Button>
  );
};
