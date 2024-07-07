import { FormEvent } from "react";

import { ButtonProps } from "components/Button/types";
import { InputProps } from "components/Input/types";

export interface LoginFormProps {
  onSubmit: (event: FormEvent) => void;
  emailImputProps: InputProps;
  passwordInputProps: InputProps;
  submitButtonProps: ButtonProps;
}
