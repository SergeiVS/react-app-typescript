export enum InputTypes {
  CHECK_BOX = "checkbox",
  EMAIL = "email",
  NUMBER = "number",
  PASSWORD = "password",
  TEXT = "text",
}

export interface InputProps {
  name: string;
  type: InputTypes;
  placeholder: string;
  label: string;
  id: string;
}
