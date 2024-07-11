import styled from "@emotion/styled";

interface StyledButtonProps {
  $isRed: boolean;
}

const getButtonColor = ($isRed: boolean | undefined) => {
  if ($isRed) {
    return "red";
  } else {
    return "rgba(31, 39, 245, 1)";
  }
};

export const SyledButton = styled("button")<StyledButtonProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border-radius: 4px;
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
