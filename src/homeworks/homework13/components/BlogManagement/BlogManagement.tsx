import { useState, createContext } from "react";
import { useFormik } from "formik";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Card from "homeworks/homework13/components/Card/Card";

import {
  BlogManWrapper,
  MessageSendForm,
  ButtonContainer,
  TextInput,
  FormTitle,
} from "./styles";

export const MainContext = createContext<string | undefined>("");

function BlogManagement() {
  const [inputText, setInputtext] = useState<string | undefined>("");

  const formik = useFormik({
    initialValues: {
      messageInput: "",
    },

    onSubmit: (values) => {
      setInputtext(values.messageInput);
    },
  });

  const buttonDisable = (): boolean => {
    return formik.dirty ? false : true;
  };

  return (
    <MainContext.Provider value={inputText}>
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
        <Card />
      </BlogManWrapper>
    </MainContext.Provider>
  );
}

export default BlogManagement;
