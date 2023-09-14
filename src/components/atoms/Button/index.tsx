import { FC } from "react";
import { IButton } from "@/shared/interfaces/IButton";
import {
  EnumColor,
  EnumFontSize,
  EnumHeigth,
  EnumWidth,
} from "@/shared/interfaces/IButton";

export const Button: FC<IButton> = ({
  text,
  icon,
  size = "lg",
  color = "slate80",
  width = "fit",
}) => {
  return (
    <button
      className={`${EnumHeigth[size]} ${EnumFontSize[size]} ${EnumColor[color]} ${EnumWidth[width]} gap-3 px-3 py-3 flex items-center justify-center text-white outline-none focus:outline-none rounded`}
    >
      {icon}
      {text}
    </button>
  );
};
