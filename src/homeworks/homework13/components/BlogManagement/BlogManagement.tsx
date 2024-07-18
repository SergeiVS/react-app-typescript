import { useState, createContext } from "react";
import { useFormik } from "formik";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Card from "homeworks/homework13/components/Card/Card";

import { BlogManWrapper, MessageSendForm, ButtonContainer } from "./styles";

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

  return (
    <MainContext.Provider value={inputText}>
      <BlogManWrapper>
        <MessageSendForm onSubmit={formik.handleSubmit}>
          <Input
            name="messageInput"
            type="textarea"
            label="Your message"
            id="message-input"
            placeholder="Type your message"
            value={formik.values.messageInput}
            onChange={formik.handleChange}
          />
          <ButtonContainer>
            <Button name="SEND MESSAGE" type="submit" />
          </ButtonContainer>
        </MessageSendForm>
        <Card />
      </BlogManWrapper>
    </MainContext.Provider>
  );
}

export default BlogManagement;
