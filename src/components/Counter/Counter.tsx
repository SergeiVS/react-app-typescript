import Button from "components/Button/Button";

import { CoumterProps } from "./types";
import { CounterWrapper, ButtonControl, Count } from "./styles";

function Counter(props: CoumterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={props.onMinus} />
      </ButtonControl>
      <Count>{props.count}</Count>
      <ButtonControl>
        <Button name="+" onClick={props.onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
