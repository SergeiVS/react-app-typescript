import { ChangeEvent, FormEvent } from "react";

export interface SearchFormProps {
  value: string;
  onChange: (event: ChangeEvent) => void;
  onSubmit: (event: FormEvent) => void;
}
