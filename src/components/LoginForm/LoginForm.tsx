import Button from "components/Button/Button";
import Input from "components/Input/Input";

import "./styles.css";
import  {LoginFormProps}  from "./types";

function LoginForm({onSubmit}:LoginFormProps) {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <p className="form-title">Login form</p>
      <div className="inputs-fields-wrapper">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          id="email-input"
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          id="password-input"
        />
      </div>
      <Button name="Login" type="submit" onClick={() => {}} />
    </form>
  );
}
//экспорт формы
export default LoginForm;
