"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ISidebarItem } from "@/shared/interfaces/ISidebarItem";

export const SidebarItem: FC<ISidebarItem> = ({
  name,
  icon,
  path,
  activeIcon,
}) => {
  const pathname = usePathname();
  const isActive = pathname == path;

  return (
    <Link
      href={path}
      className={`${
        isActive ? "font-bold" : ""
      } flex items-center rounded-full gap-x-2 px-3 py-1 cursor-pointer w-fit hover:bg-slate-400 text-white text-lg`}
    >
      {isActive ? activeIcon : icon}
      <span className="max-md:hidden max-lg:hidden">{name}</span>
    </Link>
  );
};
