import { useState, createContext } from "react";
import { useFormik } from "formik";

import Button from "components/Button/Button";
import Card from "homeworks/homework13/components/Card/Card";

import {
  BlogManWrapper,
  MessageSendForm,
  ButtonContainer,
  TextInput,
  FormTitle,
  MessageContainer,
} from "./styles";

export const BlogManagmentContext = createContext<string | undefined>("");

function BlogManagement() {
  const [inputText, setInputText] = useState<string | undefined>("");

  const formik = useFormik({
    initialValues: {
      messageInput: "",
    },

    onSubmit: (values) => {
      setInputText(values.messageInput);
    },
  });

  const buttonDisable = (): boolean => {
    return formik.dirty ? false : true;
  };

  return (
    <BlogManagmentContext.Provider value={inputText}>
      <BlogManWrapper>
        <MessageSendForm onSubmit={formik.handleSubmit}>
          <FormTitle>Type your message here:</FormTitle>
          <TextInput
            name="messageInput"
            id="message-input"
            placeholder="Type your message"
            onChange={formik.handleChange}
            value={formik.values.messageInput}
          ></TextInput>
          <ButtonContainer>
            <Button
              name="SEND MESSAGE"
              type="submit"
              disabled={buttonDisable()}
            />
          </ButtonContainer>
        </MessageSendForm>
        <MessageContainer>{formik.isSubmitting && <Card />}</MessageContainer>
      </BlogManWrapper>
    </BlogManagmentContext.Provider>
  );
}

export default BlogManagement;
