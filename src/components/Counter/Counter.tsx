import Button from "components/Button/Button";

import { CoumterProps } from "./types";
import "./styles.css";

function Counter(props: CoumterProps) {
  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={props.onMinus} />
      </div>
      <p className="count">{props.count}</p>
      <div className="button-control">
        <Button name="+" onClick={props.onPlus} />
      </div>
    </div>
  );
}

export default Counter;
