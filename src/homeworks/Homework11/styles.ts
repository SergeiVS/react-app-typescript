import styled from "@emotion/styled";

import { colors } from "styles/colors";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.PRIMARY};
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 450px;
  min-height: 350px;
  padding: 20px;
  background-color: wheat;
  border-radius: 3px;
`;

export const FormTitle = styled.p`
  font-size: 30px;
`;

export const ButtonContainer = styled.div`
  height: 70px;
  width: 100%;
`;
