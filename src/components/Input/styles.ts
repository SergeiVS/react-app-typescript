import styled from "@emotion/styled";

import {colors} from "styles/colors"


interface StyledInputProps {
  $error: undefined | string;
}

const setBorderColor = ($error: undefined | string) => {
  if (typeof $error === "string") {
    return colors.ERROR;
  } else {
    return "black";
  }
};

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

export const InputLabel = styled("label")`
  font-size: 16px;
  font-weight: 400;
  color: rgb(111, 111, 111);
`;

export const InputElemnt = styled("input")<StyledInputProps>`
  outline: none;
  width: 100%;
  height: 50px;
  font-size: 16px;
  background-color: white;
  border: 1px solid;
  border-color: ${({ $error }) => setBorderColor($error)};
  border-radius: 4px;
  padding: 12px;
  &::placeholder {
    color: rgb 12 11 10;
    font-size: 16px;
  }
  &:disabled {
    cursor: not-allowed;
    &::placeholder {
      color: black;
    }
    background-color: gray;
  }
`;
