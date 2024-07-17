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
}: ButtonProps) {
  return (
    <SyledButton
      $isRed={isRed}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {imgSrc && <ButtonImage src={imgSrc} alt="icon" />}
      {!imgSrc && name}
    </SyledButton>
  );
}

export default Button;
