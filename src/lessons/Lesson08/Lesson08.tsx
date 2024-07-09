import { css } from "@emotion/react";

import { Box1, Box2, Box3, Lesson08Wrapper } from "./styles";
import { ButtonControl } from "./styles";
import Button from "components/Button/Button";

function Lesson08() {
  return (
    <Lesson08Wrapper>
      <ButtonControl>
        <Button
          name="Lesson08"
          onClick={() => {
            console.log("This button works");
          }}
          disabled={false}
        />
      </ButtonControl>
      <Box1>Box1</Box1>
      <Box2>Box2</Box2>
      <Box3>Box3</Box3>
    </Lesson08Wrapper>
  );
}

export default Lesson08;
