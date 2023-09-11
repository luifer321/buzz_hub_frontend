import { FC } from "react";
import { IButton } from "@/shared/interfaces/IButton";
import {
  EnumColor,
  EnumFontSize,
  EnumHeigth,
} from "@/shared/interfaces/IButton";

export const Button: FC<IButton> = ({
  text,
  size = "md",
  color = "slate80",
}) => {
  return (
    <button
      className={`${EnumHeigth[size]} ${EnumFontSize[size]} ${EnumColor[color]} w-full text-white outline-none  focus:outline-none rounded`}
    >
      {text}
    </button>
  );
};
