import styled from "@emotion/styled";

interface StyledInputProps {
  $error: undefined | "Some error";
}

const setBorderColor = ($error: undefined | string) => {
  if ($error === "Some error") {
    return "red";
  }
  return "black";
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
  border-color: ${({ $error: $error }) => setBorderColor($error)};
  border-radius: 4px;
  padding: 12px;
  ::placeholder {
    color: rgb 12 11 10;
    font-size: 16px;
  }
  :disabled {
    ::placeholder {
      color: black;
    }
    background-color: gray;
  }
`;
