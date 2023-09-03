import { FC } from "react";
import { ISidebarOption } from "./type";

export const SidebarOption: FC<ISidebarOption> = ({ text, icon }) => {
  return (
    <div className="cursor-pointer px-5 py-1 w-fit flex justify-center gap-2 items-center hover:bg-slate-500 rounded-full">
      <div>{icon}</div>
      <div>
        <p className="font-serif">{text}</p>
      </div>
    </div>
  );
};
