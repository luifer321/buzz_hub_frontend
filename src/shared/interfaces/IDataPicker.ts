export interface IDataPicker {
  size?: FontSize;
  text?: string;
  width?: Width;
}

export type FontSize = "sm" | "md" | "lg";
export enum EnumFontSize {
  sm = "text-xs",
  md = "text-sm",
  lg = "text-base",
}

export type Width = "fit" | "full";
export enum EnumWidth {
  fit = "w-fit",
  full = "w-full",
}
