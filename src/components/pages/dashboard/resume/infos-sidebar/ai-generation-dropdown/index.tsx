import { Button } from "@/components/ui/button";
import type { ResizePanelDensity } from "@/hooks/use-resize-panel-density";
import { Bot } from "lucide-react";
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
      
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>Profile</DropdownMenuItem>

        <DropdownMenuItem>Billing</DropdownMenuItem>

        <DropdownMenuItem>Team</DropdownMenuItem>
        
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
