import SidebarItem from "@/components/molecules/SidebarItem";
import { sidebarItems } from "@/shared/constants/sidebar";

const Sidebar = () => {
  return (
    <section>
      {sidebarItems.map((item) => (
        <SidebarItem key={item.name} item={item} />
      ))}
    </section>
  );
};

export default Sidebar;
