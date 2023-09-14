"use client";
import { FC, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  EnumHeigth,
  EnumFontSize,
  ITextField,
  EnumColor,
} from "@/shared/interfaces/ITextField";

const TextField: FC<ITextField> = ({
  placeholder,
  type,
  size = "lg",
  icon,
  color = "slate30",
}) => {
  const [showEye, setShowEye] = useState<boolean>(false);
  const handleShow = () => setShowEye(!showEye);

  const isPassword = type === "password";
  const IconComponent = showEye ? AiFillEye : AiFillEyeInvisible;

  return (
    <div className="relative flex items-center rounded focus-within:outline focus-within:outline-slate-400 duration-150">
      {icon && (
        <span
          className={`${EnumHeigth[size]} ${EnumFontSize[size]} ${EnumColor[color]}  w-10 p-3 flex items-center justify-center rounded-l text-white`}
        >
          {icon}
        </span>
      )}
      <input
        className={`${EnumHeigth[size]} ${
          EnumFontSize[size]
        } bg-slate-600 w-full pl-3 ${!icon && "p-3 rounded"} ${
          isPassword && "pr-9"
        } placeholder:text-gray-300 text-white outline-none  focus:outline-none rounded-r`}
        placeholder={placeholder}
        type={showEye ? "text" : type}
      />
      {isPassword && (
        <IconComponent
          onClick={handleShow}
          className={`${EnumFontSize[size]} cursor-pointer text-white mx-3 w-4 h-4 absolute right-0 bg-slate-600`}
        />
      )}
    </div>
  );
};

export default TextField;
