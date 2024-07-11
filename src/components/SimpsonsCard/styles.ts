import styled from "@emotion/styled";

export const SimpsonsCardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  gap: 15px;
  width: 300px;
  padding: 20px;
  border: 2px groove rgb(118, 96, 96);
  border-radius: 8px;
  background-color: bisque;
`;

export const AvatarContainer = styled("div")`
  height: 200px;
  align-self: center;
`;

export const Avatar = styled("img")`
  height: 100%;
`;
export const CardsBlock = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Titel = styled("p")`
  font-size: 15px;
`;

export const UserData = styled("p")`
  font-size: 20px;
`;

export const Listening = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
