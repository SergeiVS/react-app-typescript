import { Formik } from "formik";
import { useFormik } from "formik";

import LoginForm from "components/LoginForm/LoginForm";
import { ChangeEvent, FormEvent, useState } from "react";
import { Lesson_11_Wrapper } from "./styles";

function Lesson11() {


  return (
    <Lesson_11_Wrapper>
      <LoginForm />
    </Lesson_11_Wrapper>
  );
}

export default Lesson11;
