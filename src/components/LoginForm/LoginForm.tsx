import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { StyledLoginForm } from "./styles";
import { StyledFormTitle } from "./styles";
import { InputsFieldsWrapper } from "./styles";

import { LoginFormProps } from "./types";

function LoginForm({ onSubmit, valueEmail, valuePassword }: LoginFormProps) {
  return (
    <StyledLoginForm onSubmit={onSubmit}>
      <StyledFormTitle className="form-title">Login form</StyledFormTitle>
      <InputsFieldsWrapper>
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          id="email-input"
          value={valueEmail}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          id="password-input"
          value={valuePassword}
        />
      </InputsFieldsWrapper>
      <Button name="Login" type="submit" onClick={() => {}} />
    </StyledLoginForm>
  );
}
//экспорт формы
export default LoginForm;
