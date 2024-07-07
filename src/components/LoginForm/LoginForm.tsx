import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormProps } from "./types";
import "./styles.css";

function LoginForm(props: LoginFormProps) {
  return (
    <form className="login-form" onSubmit={props.onSubmit}>
      <p className="form-title">Login form</p>
      <div className="inputs-fields-wrapper">
        <Input
          name={props.emailImputProps.name}
          type={props.emailImputProps.type}
          placeholder={props.emailImputProps.placeholder}
          label={props.emailImputProps.label}
          id={props.emailImputProps.id}
        />
        <Input
          name={props.passwordInputProps.name}
          type={props.passwordInputProps.type}
          placeholder={props.passwordInputProps.placeholder}
          label={props.passwordInputProps.label}
          id={props.passwordInputProps.id}
        />
      </div>
      <Button
        name={props.submitButtonProps.name}
        type={props.submitButtonProps.type}
        imgSrc={props.submitButtonProps.imgSrc}
      />
    </form>
  );
}
//экспорт формы
export default LoginForm;
