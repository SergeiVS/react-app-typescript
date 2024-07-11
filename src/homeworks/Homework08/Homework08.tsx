import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { Lesson08Wrapper } from "lessons/Lesson08/styles";

function Homework08() {
  return (
    <Lesson08Wrapper>
      <Button name="Disabled" disabled={true} onClick={() => {}} />
      <Button
        name="Red"
        isRed={true}
        onClick={() => {
          console.log("Red button works");
        }}
      />
      <Button
        name="Normal"
        onClick={() => {
          console.log("Normal button works");
        }}
      />
      <Input
        name="text"
        placeholder="Insert your text"
        label="Normal Input"
        id="normal-input"
        error={undefined}
        value={undefined}
      />
      <Input
        name="text-disabled"
        placeholder="Input is disabled"
        label="Disabled Input"
        id="disabled-input"
        disabled={true}
        value={undefined}
      />
      <Input
        name="text-with-error"
        placeholder="Input is with error"
        label="Input with error"
        id="errored-input"
        error="Some error"
        value={undefined}
      />
    </Lesson08Wrapper>
  );
}

export default Homework08;
