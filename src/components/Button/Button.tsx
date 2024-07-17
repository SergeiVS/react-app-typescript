import { ButtonProps } from "./types";
import { SyledButton, ButtonImage } from "./styles";
import { colors } from "styles/colors";

function Button({
  name,
  type = "button",
  onClick,
  imgSrc,
  disabled = false,
  isRed = false,
  backgroundColor = colors.PRIMARY_BLUE,
  color = "white",
}: ButtonProps) {
  return (
    <SyledButton
      $isRed={isRed}
      type={type}
      onClick={onClick}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $color={color}
    >
      {!!imgSrc && <ButtonImage src={imgSrc} alt="icon" />}
      {!!name && name}
    </SyledButton>
  );
}

export default Button;
