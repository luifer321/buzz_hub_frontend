export interface IButton {
  text?: string;
  size?: TextFieldSize;
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

export type BgColor = "slate10" | "slate30" | "slate50" | "slate80";
export enum EnumColor {
  slate10 = "bg-slate-100",
  slate30 = "bg-slate-300",
  slate50 = "bg-slate-500",
  slate80 = "bg-slate-800",
}
