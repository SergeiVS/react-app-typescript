import styled from "@emotion/styled";
import { colors } from "styles/colors";

interface StyledButtonProps {
  $backgroundColor: string;
  $isRed: boolean;
  $color: string;
}

const getButtonColor = (
  $isRed: boolean | undefined,
  $backgroundColor: string
) => {
  return $isRed ? colors.ERROR : $backgroundColor;
};

export const SyledButton = styled("button")<StyledButtonProps>`
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 4px;
  border: 1px solid grey;
  font-size: 20px;
  font-weight: 600;
  background-color: ${({ $isRed, $backgroundColor }) =>
    getButtonColor($isRed, $backgroundColor)};
  color: $color;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: gray;
  }
`;



export const ButtonImage = styled("img")`
  height: 50px;
`;
