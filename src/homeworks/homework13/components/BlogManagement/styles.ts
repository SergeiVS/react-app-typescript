import styled from "@emotion/styled";

import { colors } from "styles/colors";
import { PageWrapper } from "styles/wrapperStyles";

export const BlogManWrapper = styled.div`
  ${PageWrapper}
  gap: 20px;
  justify-content: space-between;
  padding: 40px;
  background-image: url("https://st.depositphotos.com/1585135/4877/i/380/depositphotos_48772323-stock-photo-quill-pen-and-old-notebook.jpg");
  background-size: cover;
`;

export const MessageSendForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 400px;
 height: 400px;
  padding: 20px;
`;

export const FormTitle = styled.p`
  align-self: flex-start;
  font-size: 18px;
  font-weight: 400;
  color: black;
`;

export const TextInput = styled.textarea`
  outline: none;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  font-size: 16px;
  background-color: white;
  border: 1px solid;
  border-radius: 4px;
  padding: 12px;
  overflow-y: auto;
  &::placeholder {
    color: ${colors.PLACEHOLDER};
    font-size: 16px;
  }
`;
export const ButtonContainer = styled.div`
  min-height: 70px;
  width: 250px;
`;

export const MessageContainer = styled.div`
  width: 450px;
  max-height: fit-content;
`;
