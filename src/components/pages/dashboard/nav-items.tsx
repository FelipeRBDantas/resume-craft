import { Button } from "@/components/ui/button";
import { Newspaper, SquareUser } from "lucide-react";
import Link from "next/link";

export const NavItems = () => {
  const navItems = [
    {
      label: "Currículos",
      icon: Newspaper,
      path: "/dashboard/resumes",
    },
    {
      label: "Configurações da Conta",
      icon: SquareUser,
      path: "/dashboard/account",
    },
  ];

  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {navItems.map(({ label, icon: Icon, path }) => (
        <Link key={path} href={path}>
          <Button variant="ghost" className="w-full gap-2 justify-start">
            <Icon size={16} />
            {label}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
