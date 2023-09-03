import { renderIcon } from "@/shared/helpers/sidebar";
import { ISidebarItem } from "@/shared/interfaces/ISidebarItem";

type SidebarItemProps = {
  item: ISidebarItem;
};

function SidebarItem({ item }: SidebarItemProps) {
  return (
    <div className="flex justify-center items-center gap-x-2 px-1 py-2 cursor-pointer rounded-md hover:bg-gray-300">
      {renderIcon(item.icon)}
      <span>{item.name}</span>
    </div>
  );
}

export default SidebarItem;
