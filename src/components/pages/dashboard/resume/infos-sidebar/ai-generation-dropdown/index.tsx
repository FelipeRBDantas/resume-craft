import { Button } from "@/components/ui/button";
import type { ResizePanelDensity } from "@/hooks/use-resize-panel-density";
import { BadgeCent, Bot } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type AIGenerationDropdownProps = {
  layoutDensity: ResizePanelDensity;
};

export const AIGenerationDropdown = ({
  layoutDensity,
}: AIGenerationDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2 text-xs px-2.5 py-1 h-9">
          <Bot size={20} />

          {layoutDensity === "compact" ? "IA" : "Inteligência Artificial"}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent sideOffset={10} align="start">
        <DropdownMenuLabel className="text-muted-foreground text-xs flex items-center gap-1">
          Você possui{" "}

          <strong className="text-foreground inline-flex items-center gap-0.5">
            <BadgeCent size={14} />

            20 créditos
          </strong>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>Profile</DropdownMenuItem>

        <DropdownMenuItem>Billing</DropdownMenuItem>

        <DropdownMenuItem>Team</DropdownMenuItem>
        
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
