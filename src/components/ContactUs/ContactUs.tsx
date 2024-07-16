import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { ContactForm, FormTitle, ButtonContainer } from "./styles";
import { CONTACT_US_FORM_NAMES } from "./types";

function ContactUs() {
  const validationSchema = Yup.object().shape({
    [CONTACT_US_FORM_NAMES.FULLNAME]: Yup.string()
      .required("This field is required")
      .min(3, "Full name has to contain at least 3 sympols")
      .max(50, "Full name has to contain max 50 sympols"),

    [CONTACT_US_FORM_NAMES.PHONE]: Yup.string()
      .required("This field is required")
      .min(4, "Pone number has to contain at least 4 sympols")
      .max(20, "Phone nummber has to contain max 20 sympols"),
    [CONTACT_US_FORM_NAMES.EMAIL]: Yup.string()
      .email("Inputed data have to be in email format")
      .min(6, "Email has to contain at least 6 sympols")
      .max(60, "Email has to contain max 60 sympols"),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACT_US_FORM_NAMES.FULLNAME]: "",
      [CONTACT_US_FORM_NAMES.PHONE]: "",
      [CONTACT_US_FORM_NAMES.EMAIL]: "",
    },

    validationSchema: validationSchema,
    validateOnChange: false,

    onSubmit: (values, helpers) => {
      console.log(values);
    },
  });
  return (
    <ContactForm onSubmit={formik.handleSubmit}>
      <FormTitle>Contact us</FormTitle>
      <Input
        id="fullname-id"
        label="Full name"
        placeholder="Your full name"
        name={CONTACT_US_FORM_NAMES.FULLNAME}
        value={formik.values[CONTACT_US_FORM_NAMES.FULLNAME]}
        onChange={formik.handleChange}
        error={formik.errors[CONTACT_US_FORM_NAMES.FULLNAME]}
      />
      <Input
        id="phone-id"
        label="Phone"
        placeholder="Your phone number"
        name={CONTACT_US_FORM_NAMES.PHONE}
        value={formik.values[CONTACT_US_FORM_NAMES.PHONE]}
        onChange={formik.handleChange}
        error={formik.errors[CONTACT_US_FORM_NAMES.PHONE]}
      />
      <Input
        id="email-id"
        label="Email"
        placeholder="Your email"
        name={CONTACT_US_FORM_NAMES.EMAIL}
        value={formik.values[CONTACT_US_FORM_NAMES.EMAIL]}
        onChange={formik.handleChange}
        error={formik.errors[CONTACT_US_FORM_NAMES.EMAIL]}
      />{" "}
      <ButtonContainer>
        <Button
          disabled={formik.isSubmitting}
          type="submit"
          name="SEND REQUEST"
        />
      </ButtonContainer>
    </ContactForm>
  );
}

export default ContactUs;
