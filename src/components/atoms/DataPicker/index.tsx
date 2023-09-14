import { FC } from "react";
import {
  EnumFontSize,
  EnumWidth,
  IDataPicker,
} from "@/shared/interfaces/IDataPicker";

export const DataPicker: FC<IDataPicker> = ({
  size = "md",
  text,
  width = "fit",
}) => {
  return (
    <div className="bg-slate-600 px-1 rounded focus-within:outline focus-within:outline-slate-400 flex items-center">
      {text}
      <input
        className={`${EnumFontSize[size]} ${EnumWidth[width]} px-2 text-gray-300 bg-transparent outline-none  focus:outline-none`}
        type="date"
      />
    </div>
  );
};
