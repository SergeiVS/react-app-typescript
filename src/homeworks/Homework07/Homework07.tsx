import { MouseEvent } from "react";

import SimpsonsCard from "components/SimpsonsCard/SimpsonsCard";
import LoginForm from "components/LoginForm/LoginForm";

import { testUser } from "./testEntitys";
import { loginFormProps } from "./testEntitys";
import "./styles.css";

function Homework07() {
  return (
    <div className="homework-wrapper">
      <SimpsonsCard
        firstName={testUser.firstName}
        lastName={testUser.lastName}
        occupation={testUser.occupation}
        hobbies={testUser.hobbies}
        avatarUrl={testUser.avatarUrl}
      />
      <LoginForm
        emailImputProps={loginFormProps.emailImputProps}
        passwordInputProps={loginFormProps.passwordInputProps}
        submitButtonProps={loginFormProps.submitButtonProps}
      />
    </div>
  );
}
export default Homework07;
