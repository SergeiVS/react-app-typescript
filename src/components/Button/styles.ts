import styled from "@emotion/styled";
import { colors } from "styles/colors";

interface StyledButtonProps {
  $isRed: boolean;
}

const getButtonColor = ($isRed: boolean | undefined) => {
  if ($isRed) {
    return colors.ERROR;
  } else {
    return colors.PRIMARY_BLUE;
  }
};

export const SyledButton = styled("button")<StyledButtonProps>`
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 4px;
  border: 1px solid grey;
  font-size: 20px;
  font-weight: 600;
  background-color: ${({ $isRed }) => getButtonColor($isRed)};
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: gray;
  }
`;

export const ButtonImage = styled("img")`
  height: 50px;
`;
