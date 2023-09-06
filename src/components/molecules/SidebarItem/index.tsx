"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ISidebarItem } from "@/shared/interfaces/ISidebarItem";

const SidebarItem: FC<ISidebarItem> = ({ name, icon, path, activeIcon }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      href={path}
      className={`${
        pathname == path ? "font-bold" : ""
      } flex items-center rounded-full gap-x-2 px-3 py-1 cursor-pointer w-fit hover:bg-slate-400 text-white`}
    >
      {pathname == path ? activeIcon : icon}
      <span>{name}</span>
    </Link>
  );
};

export default SidebarItem;
