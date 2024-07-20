import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { UserDataFormContainer, InputContainer } from "./styles";

function CreateEmployeeForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name field is required")
      .min(2, "Name field should contain minimum 2 symbols")
      .max(50, "Name field should contain maximum 50 symobols"),
    surname: Yup.string()
      .required("Surame field is required")
      .max(15, "Surname field should contain maximum 15 symobols"),
    age: Yup.string()
      .required("Age field is required")
      .min(1, "Age field should contain minimum 1 symobol")
      .max(3, "Age field should contain maximum 3 symobols"),
    job_position: Yup.string().max(
      30,
      "Job Position field should contain maximum 30 symobols"
    ),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      job_position: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {},
  });

  return (
    <UserDataFormContainer onSubmit={formik.handleSubmit}>
        <InputContainer>
      <Input
        id="name-id"
        name="name"
        type="text"
        placeholder="John"
        label="Name*"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Input
        id="surname-id"
        name="surname"
        type="text"
        placeholder="Johnson"
        label="Surname*"
        value={formik.values.surname}
        onChange={formik.handleChange}
        error={formik.errors.surname}
      />
      <Input
        id="age-id"
        name="age"
        type="number"
        placeholder="25"
        label="Age*"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <Input
        id="job-id"
        name="job_position"
        type="text"
        placeholder="QA"
        label="Job Position"
        value={formik.values.job_position}
        onChange={formik.handleChange}
        error={formik.errors.job_position}
      />
      </InputContainer>
      <Button disabled={formik.isSubmitting} name="Create" type="submit" />
    </UserDataFormContainer>
  );
}

export default CreateEmployeeForm;
