import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  gap: 20px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
  background-color: #E9FAFF;
  box-shadow: 0px 1px 10px 0px #9F9F9F;
`;

export const CardsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 10px;
`;


export const Titel = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const UniName =styled.p`
font-size: 25px;
font-weight: 500;
`

export const UniPage =styled.p`
font-size: 20px;
font-weight: 500;
font-style: italic;
`