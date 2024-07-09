import { InputProps } from "./types";
import "./styles.css";

function Input({ label, name, type, placeholder, id }: InputProps) {
  return (
    <div className="input-wrapper">
      <label className="inputLable" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

export default Input;
