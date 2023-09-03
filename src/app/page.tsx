"use client";
import { AiOutlineHome } from "react-icons/ai";
import { SidebarOption } from "@/shared/components/atoms/SiderbarOption";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <SidebarOption text="Home" icon={<AiOutlineHome />} />
    </div>
  );
}
