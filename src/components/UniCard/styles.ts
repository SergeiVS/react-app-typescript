import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  min-height: fit-content;
  gap: 20px;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: #c1d9dd;
  opacity: 90%;
  box-shadow: 0px 1px 10px 0px #9f9f9f;
`;

export const CardsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 10px;
`;

export const Titel = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const UniName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const UniPage = styled.a`
  overflow-wrap: break-word;
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
`;
