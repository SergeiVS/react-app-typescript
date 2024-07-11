import { HTMLInputTypeAttribute, ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  id: string;
  disabled?: boolean;
  error?: "Some error" | undefined;
  value: string | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
