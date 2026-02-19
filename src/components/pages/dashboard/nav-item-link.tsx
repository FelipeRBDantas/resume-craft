"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: JSX.Element;
  path: string;
}

export const NavItemLink = ({ label, icon: Icon, path }: NavItem) => {
  const pathname = usePathname();

  const isActive = pathname.startsWith(path);

  return (
    <Link href={path}>
      <Button
        variant="ghost"
        className={cn("w-full gap-2 justify-start", isActive && "bg-accent")}
      >
        {Icon}
        {label}
      </Button>
    </Link>
  );
};
