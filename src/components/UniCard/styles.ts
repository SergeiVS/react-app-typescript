import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  gap: 20px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: #639FAB;
  -webkit-box-shadow: -1px 2px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 19px 0px rgba(0, 0, 0, 0.75);
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