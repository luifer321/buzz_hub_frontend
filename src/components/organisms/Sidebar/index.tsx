import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { SidebarItem } from "@/components";
import { sidebarItems } from "@/shared/constants/sidebar";

export const Sidebar: FC = () => {
  return (
    <div>
      <nav className="flex flex-col gap-2 max-sm:flex-row max-lg:items-center max-md:items-center max-md:gap-3">
        <Link href="/" className="max-sm:hidden">
          <Image
            className="mt-1 flex rounded-full gap-x-2 px-3 py-1 cursor-pointer w-fit hover:bg-slate-400`"
            width={25}
            height={25}
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
