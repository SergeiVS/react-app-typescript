import "./styles.css";
import { ButtonProps } from "./types";

function Button({
  name = "Send",
  type = "button",
  onClick,
  imgSrc = undefined,
}: ButtonProps) {
  return (
    <button className={`button-component `} type={type} onClick={onClick}>
      {!name && <img className="button-image" src={imgSrc} alt="icon" />}
      {!imgSrc && name}
    </button>
  );
}

export default Button;
