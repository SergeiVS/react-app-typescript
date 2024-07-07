import { ButtonProps } from "./types";
import "./styles.css";

function Button({ name, type = "button", onClick, imgSrc }: ButtonProps) {
  return (
    <button className={`button-component `} type={type} onClick={onClick}>
      {!name && <img className="button-image" src={imgSrc} alt="icon" />}
      {name}
    </button>
  );
}

export default Button;
