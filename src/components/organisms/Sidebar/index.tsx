import { FC } from "react";
import { sidebarItems } from "@/shared/constants/sidebar";
import SidebarItem from "@/components/molecules/SidebarItem";

const Sidebar: FC = () => {
  return (
    <nav className="flex flex-col gap-1">
      {sidebarItems.map((item) => (
        <SidebarItem key={item.name} {...item} />
      ))}
    </nav>
  );
};

export default Sidebar;
