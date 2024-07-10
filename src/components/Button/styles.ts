import styled from "@emotion/styled";

interface StyledButtonProps {
  $isRed: boolean;
}

const getButtonColor = (
  disabled: boolean | undefined,
  $isRed: boolean | undefined
) => {
  if (disabled) {
    return "gray";
  } else if ($isRed) {
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
  background-color: ${({ disabled, $isRed }) =>
    getButtonColor(disabled, $isRed)};
  color: rgba(255, 255, 255, 1);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const ButtonImage = styled("img")`
  height: 50px;
`;
