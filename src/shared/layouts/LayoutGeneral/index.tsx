import { FC } from "react";
import { Sidebar } from "@/components";
import { ILayoutGeneral } from "./types";

export const LayoutGeneral: FC<ILayoutGeneral> = ({ children }) => {
  return (
    <main className="flex justify-center w-full h-screen max-sm:flex-col-reverse mx-auto">
      <aside className="flex justify-end max-sm:items-center max-sm:justify-center max-md:justify-end w-full h-screen max-w-[300px] max-xl:max-w-[250px] max-lg:max-w-[80px] max-sm:max-h-16 max-sm:max-w-full">
        <Sidebar />
      </aside>
      <section className="w-[638px] h-screen max-sm:max-w-full max-sm:border-none border-x border-x-slate-400 max-lg:border-r-0">
        {children}
      </section>
      <aside className="w-full max-w-[400px] h-screen max-2xl:max-w-[300px] max-xl:hidden">
        <Sidebar />
      </aside>
    </main>
  );
};
