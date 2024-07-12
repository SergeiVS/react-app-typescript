import styled from "@emotion/styled";

export const StyledJokeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  min-height: 300px;
  max-height: fit-content;
  padding: 40px;
  background-color: wheat;
  border: 4px groove gold;
  border-radius: 9px;
  box-shadow: 4px 4px 14px;
`;

export const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Joke = styled.p`
  font-size: 25px;
  font-weight: bolder;
`;
