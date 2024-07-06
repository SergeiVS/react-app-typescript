// импорт необходимых компонентов и стилей
import "./styles.css";

import Button from "../Button/Button";
import Input from "../Input/Input";

//функция возвращающая форму входа
function LoginForm() {
  
  const login = (event) => {
    event.preventDefault();
    console.log("User logged in succesfully");
  };

  return (
    <form className="login-form">
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
      <Button onClick={login} name="Login" type="submit" buttonClass={"main-button"}/>
      {/* <button
        className="button-click"
        type="button"
        onClick={(event) => {
          clickOnMe(event, ()=>{sonsole.log("it works")});
        }}
      >
        click me!!!
       </button> */}
    </form>
  );
}
//экспорт формы
export default LoginForm;
