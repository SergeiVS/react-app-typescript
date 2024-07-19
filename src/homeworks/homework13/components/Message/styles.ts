import styled from "@emotion/styled";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  width: 100%;
`;

export const StyledMessage = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  word-break: break-all;
  text-align: justify;
  font-size: 25px;
  font-style: italic;
  padding: 10px;
`;

export const MessageTitle = styled.p`
  font-size: larger;
`;
