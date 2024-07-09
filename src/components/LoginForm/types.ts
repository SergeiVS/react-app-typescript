import { FormEvent } from "react";

export interface LoginFormProps {
  onSubmit: (event: FormEvent) => void;
}
