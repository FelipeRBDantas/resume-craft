import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogOut, SquareUser } from "lucide-react";

export const UserDropdwon = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full gap-2 justify-start px-2">
          <Avatar className="w-7 h-7 block">
            <AvatarImage src="https://github.com/feliperbdantas.png" />

            <AvatarFallback>FD</AvatarFallback>
          </Avatar>

          <p>Felipe Dantas</p>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <DropdownMenuItem asChild>
          <Link href="/dashboard/account" className="flex gap-2">
            <SquareUser size={16} />
            Configurações de Conta
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2 text-red-500">
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
