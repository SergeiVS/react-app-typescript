import { MouseEvent } from "react";

export type ButtonType = "button" | "submit" | "reset" | undefined;



export interface ButtonProps {
  name: string;
  type?: ButtonType;
  imgSrc?: string | undefined;
  onClick: (event?: MouseEvent) => void;
}
