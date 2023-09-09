export interface IButton {
  text?: string;
  placeholder?: string;
  size?: TextFieldSize;
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
