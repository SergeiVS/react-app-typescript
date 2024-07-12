import { FormEvent, ChangeEvent } from "react";

export interface LoginFormProps {
  onSubmit: (event: FormEvent) => void;
  valueEmail: string|undefined
  valuePassword: string|undefined
}
