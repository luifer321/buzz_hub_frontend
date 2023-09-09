import { FC } from "react";
import { IButton } from "@/shared/interfaces/IButton";
import { EnumFontSize, EnumHeigth } from "@/shared/interfaces/ITextField";

export const Button: FC<IButton> = ({ text, placeholder, size = "md" }) => {
  return (
    <button
      className={`${EnumHeigth[size]} ${EnumFontSize[size]} bg-slate-800 w-full placeholder:text-gray-300 text-white outline-none  focus:outline-none rounded`}
      placeholder={placeholder}
    >
      {text}
    </button>
  );
};
