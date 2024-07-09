import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Lesson08Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 40px;
  padding: 100px;
`;

export const ButtonControl = styled("div")`
  width: 300px;
`;

export const CommonBoxStyles = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  padding: 30px;
  border: 2px solid black;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const Box1 = styled("div")`
  ${CommonBoxStyles}
  background-color: blue;
`;
export const Box2 = styled("div")`
  ${CommonBoxStyles}
  background-color: green;
`;
export const Box3 = styled("div")`
  ${CommonBoxStyles}
  background-color: red;
`;
