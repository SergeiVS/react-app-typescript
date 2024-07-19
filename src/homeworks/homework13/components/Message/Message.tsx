import { useContext } from "react";
import { BlogManagmentContext } from "homeworks/homework13/components/BlogManagement/BlogManagement";

import { MessageWrapper, StyledMessage, MessageTitle } from "./styles";

function Message() {
  const messageText = useContext<string | undefined>(BlogManagmentContext);
  return (
    <MessageWrapper>
      <MessageTitle>Message:</MessageTitle>
      <StyledMessage>{messageText}</StyledMessage>
    </MessageWrapper>
  );
}

export default Message;
