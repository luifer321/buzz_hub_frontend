import { FC } from "react";
import { ISidebarItem } from "@/shared/interfaces/ISidebarItem";
import Link from "next/link";

const SidebarItem: FC<ISidebarItem> = ({ name, icon, path }) => {
  return (
    <Link
      href={path}
      className="flex items-center rounded-full gap-x-2 px-3 py-1 cursor-pointer w-fit hover:bg-[#E5D4ED]"
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default SidebarItem;
