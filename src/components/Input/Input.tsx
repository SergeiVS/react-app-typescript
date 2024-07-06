import { InputProps } from "./types";
import "./styles.css";

function Input(props: InputProps) {
  return (
    <div className="input-wrapper">
      <label className="inputLable" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="input"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  );
}

export default Input;
