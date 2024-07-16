import { ChangeEvent, FormEvent } from "react";

export interface SearchFormProps {
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}
