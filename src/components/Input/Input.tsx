import { InputProps } from "./types";
import { InputWrapper } from "./styles";
import { InputLabel } from "./styles";
import { InputElemnt } from "./styles";

function Input({
  label,
  name,
  type,
  placeholder,
  id,
  disabled,
  error,
}: InputProps) {
  const setDisabled = (
    disabled: boolean | undefined,
    error: "Some error" | undefined
  ): boolean | undefined => {
    if (error === "Some error") {
      disabled = true;
      return disabled;
    } else {
      return disabled;
    }
  };

  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputElemnt
        $error={error}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={setDisabled(disabled, error)}
      />
    </InputWrapper>
  );
}

export default Input;
