import { User } from "components/SimpsonsCard/types";
import { InputTypes } from "components/Input/types";
import { LoginFormProps } from "components/LoginForm/types";

export const testUser: User = {
  firstName: "Homer",
  lastName: "Simpson",
  occupation: "Nuclear safety inspector",
  hobbies: [
    "Sleeping at the Springfield Nuclear Plant",
    "Strangling Bart",
    "Being Lazy",
    "Loathing Ned Flanders",
    "Drinking beer",
    "Eating donuts and other junk food",
  ],
  avatarUrl:
    "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
};

export const loginFormProps: LoginFormProps = {
  emailImputProps: {
    name: "email",
    type: InputTypes.EMAIL,
    placeholder: "Enter your email",
    label: "Email",
    id: "email-input",
  },

  passwordInputProps: {
    name: "password",
    type: InputTypes.PASSWORD,
    placeholder: "Enter your password",
    label: "Password",
    id: "password-input",
  },

  submitButtonProps: {
    name: "Login",
    onClick: (event)=> {
      event?.preventDefault();
      console.log("Button works");
    },
  },
};
