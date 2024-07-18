import styled from "@emotion/styled";

import { PageWrapper } from "styles/wrapperStyles";

export const BlogManWrapper = styled.div`
  ${PageWrapper}
  gap: 40px;
  justify-content: space-between;
  padding: 40px;
  background-image: url("https://st.depositphotos.com/1585135/4877/i/380/depositphotos_48772323-stock-photo-quill-pen-and-old-notebook.jpg");
  background-size: cover;
`;

export const MessageSendForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  width: 400px;
  height: 500px;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  height: 70px;
  width: 250px;
`;
