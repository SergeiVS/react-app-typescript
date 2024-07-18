import { useState, ChangeEvent, createContext } from "react";
import { useFormik } from "formik";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Card from "homeworks/homework13/components/Card/Card";

import {
  BlogManWrapper,
  MessageSendForm,
  InputContainer,
  ButtonContainer,
} from "./styles";

export const MainContext = createContext<string | undefined>("");

function BlogManagement() {
  const [inputText, setInputtext] = useState<string | undefined>("");

  const formik = useFormik({
    initialValues: {
      "messageToSend": "",
    },

    onSubmit: (values) => {
      setInputtext(values.messageToSend);
    },
  });

  console.log(inputText);

  return (
    <MainContext.Provider value={inputText}>
      <BlogManWrapper>
        <MessageSendForm onSubmit={formik.handleSubmit}>
          <InputContainer>
            <Input
              id="message-input"
              name="messageToSend"
              label="Your message:"
              value={inputText}
              placeholder="Type your message"
              onChange={formik.handleChange}
            />
          </InputContainer>
          <ButtonContainer>
            <Button name="SEND MESSAGE" />
          </ButtonContainer>
        </MessageSendForm>
        <Card />
      </BlogManWrapper>
    </MainContext.Provider>
  );
}

export default BlogManagement;
