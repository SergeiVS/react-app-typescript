import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { StyledLoginForm } from "./styles";
import { StyledFormTitle } from "./styles";
import { InputsFieldsWrapper } from "./styles";
import { LOGIN_FORM_NAMES } from "./types";

import { useFormik } from "formik";
import * as Yup from "yup";

function LoginForm() {
  const validationSchema = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string()
      .required("This field is required")
      .email("This field should cbe in email format"),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.string()
      .required("This field is required")
      .min(5, "Password has to contain at least 5 sympols")
      .max(15, "Password has to contain max 15 sympols"),
  });

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: "",
      [LOGIN_FORM_NAMES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,

    onSubmit: (values, helpers) => {
      console.log("works");
      console.log(values);
      console.log(helpers);
    },
  });

  return (
    <StyledLoginForm onSubmit={formik.handleSubmit}>
      <StyledFormTitle className="form-title">Login form</StyledFormTitle>
      <InputsFieldsWrapper>
        <Input
          name={LOGIN_FORM_NAMES.EMAIL}
          type="text"
          placeholder="Enter your email"
          label="Email"
          id="email-input"
          value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          name={LOGIN_FORM_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          id="password-input"
          value={formik.values[LOGIN_FORM_NAMES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputsFieldsWrapper>
      <Button disabled={formik.isSubmitting} name="Login" type="submit" />
    </StyledLoginForm>
  );
}
//экспорт формы
export default LoginForm;
