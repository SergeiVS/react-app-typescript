import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { CreateEmployeeForm, ButtonContainer } from "./styles";
import { EmployeeAppContext } from "pages/EmployeeAppProject/contexts/EmployeeAppContext";

function CreateEmployee() {
  const context = useContext(EmployeeAppContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      surName: "",
      age: 0,
      jobPosition: "",
    },

    onSubmit: (values) => {
      context.setter(values);
      console.log(values);
      console.log(context.employee);
    },
  });
  console.log(formik.values);

  return (
    <CreateEmployeeForm onSubmit={formik.handleSubmit}>
      <Input
        label="Name*"
        id="name-id"
        name="name"
        type="text"
        value={formik.values.name}
        placeholder="John"
        onChange={formik.handleChange}
      />
      <Input
        label="Surname*"
        id="surname-id"
        name="surName"
        type="text"
        value={formik.values.surName}
        placeholder="Johnson"
        onChange={formik.handleChange}
      />
      <Input
        label="Age*"
        id="age-id"
        name="age"
        type="number"
        value={formik.values.age}
        placeholder="25"
        onChange={formik.handleChange}
      />
      <Input
        label="Job Position"
        id="position-id"
        name="jobPosition"
        type="text"
        value={formik.values.jobPosition}
        placeholder="QA"
        onChange={formik.handleChange}
      />
      <ButtonContainer>
        <Button type="submit" name="Create" />
      </ButtonContainer>
    </CreateEmployeeForm>
  );
}
export default CreateEmployee;
