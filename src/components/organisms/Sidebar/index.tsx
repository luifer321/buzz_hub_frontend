import { FC } from "react";
import { sidebarItems } from "@/shared/constants/sidebar";
import SidebarItem from "@/components/molecules/SidebarItem";
import Link from "next/link";
import Image from "next/image";

const Sidebar: FC = () => {
  return (
    <div>
      <nav className="flex flex-col gap-1">
        <Link href="/">
          <Image
            className="mt-1 flex items-center rounded-full gap-x-2 px-3 py-1 cursor-pointer w-fit hover:bg-slate-400 `"
            width={20}
            height={20}
            src="/logo.png"
            alt="logo"
          />
        </Link>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.name} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
