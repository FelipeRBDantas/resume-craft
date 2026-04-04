import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { Home } from "lucide-react";
import Link from "next/link";

export const NavigationHeader = () => {
  return (
    <header className="absolute w-full left-0 top-0 z-10 p-2 bg-background border-b border-muted flex items-center justify-between gap-2">
      <div>
        <Tooltip content="Voltar ao painel">
          <Link href="/dashboard/resumes" passHref>
            <Button
              variant="secondary"
              className="w-8 h-8 bg-transparent"
              size="icon"
            >
              <Home size={18} />
            </Button>
          </Link>
        </Tooltip>
      </div>
    </header>
  );
};
