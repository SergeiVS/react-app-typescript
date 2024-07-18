import { useContext } from "react";
import { MainContext } from "homeworks/homework13/components/BlogManagement/BlogManagement";

import { StyledMessage } from "./styles";

function Message() {
  const inputText = useContext<string | undefined>(MainContext);
  return <StyledMessage>{inputText}</StyledMessage>;
}

export default Message;
