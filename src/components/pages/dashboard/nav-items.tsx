import { Newspaper, SquareUser } from "lucide-react";
import { NavItemLink } from "./nav-item-link";

export const NavItems = () => {
  const navItems = [
    {
      label: "Currículos",
      icon: <Newspaper size={16} />,
      path: "/dashboard/resumes",
    },
    {
      label: "Configurações da Conta",
      icon: <SquareUser size={16} />,
      path: "/dashboard/account",
    },
  ];

  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {navItems.map((item) => (
        <NavItemLink key={item.path} {...item} />
      ))}
    </nav>
  );
};
