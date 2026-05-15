import { Button } from "@/components/ui/button";
import type { ResizePanelDensity } from "@/hooks/use-resize-panel-density";
import { BadgeCent, Bot, BriefcaseBusiness, CirclePercent, Languages, PencilLine } from "lucide-react";
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
  const actions = [
    {
      label: "Comprar créditos",
      icon: CirclePercent,
      onClick: () => console.log("Comprar créditos"),
    },
    {
      label: "Gerar conteúdo para vaga de emprego",
      icon: BriefcaseBusiness,
      onClick: () => console.log("Gerar conteúdo para vaga de emprego"),
    },
    {
      label: "Melhorar e corrigir conteúdo existente",
      icon: PencilLine,
      onClick: () => console.log("Melhorar e corrigir conteúdo existente"),
    },
    {
      label: "Traduzir conteúdo existente",
      icon: Languages,
      onClick: () => console.log("Traduzir conteúdo existente"),
    },
  ];

  return (
    <>
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

          {actions.map(action => (
            <DropdownMenuItem
              key={action.label}
              className="gap-2"
              onClick={action.onClick}
            >
              {action.icon && <action.icon size={18} className="text-muted-foreground" />}

              {action.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
