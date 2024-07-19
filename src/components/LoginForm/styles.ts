import styled from "@emotion/styled";
import { colors } from "styles/colors";

export const StyledLoginForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px;
  width: 590px;
  min-height: 450px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: white;
`;

export const StyledFormTitle = styled("p")`
  font-size: 24px;
  font-weight: 400;
  color: black;
`;

export const InputsFieldsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  min-height: 70px;
`;
