import { ReactNode } from "react";

export interface ITextField {
  placeholder?: string;
  type: string;
  size?: TextFieldSize;
  icon?: ReactNode;
  iconPass?: ReactNode;
  color?: BgColor;
}

export type TextFieldSize = "sm" | "md" | "lg";
export enum EnumHeigth {
  sm = "h-5",
  md = "h-8",
  lg = "h-10",
}

export enum EnumFontSize {
  sm = "text-xs",
  md = "text-sm",
  lg = "text-base",
}

export type BgColor = "slate10" | "slate30" | "slate60" | "slate70";
export enum EnumColor {
  slate10 = "bg-slate-100",
  slate30 = "bg-slate-300",
  slate60 = "bg-slate-600",
  slate70 = "bg-slate-700",
}
