import "./styles.css";

function Input({ name, type, placeholder, label, id }) {
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
