import { ReactNode } from "react";
import { v4 } from "uuid";

import { SimpsonsCardProps } from "./types";
import {
  SimpsonsCardWrapper,
  AvatarContainer,
  Avatar,
  Titel,
  UserData,
  CardsBlock,
  Listening,
} from "./styles";


function SimpsonsCard({
  firstName,
  lastName,
  avatarUrl,
  occupation,
  hobbies,
}: SimpsonsCardProps) {
  const liElements = (hobbies: string[]): ReactNode[] => {
    return hobbies.map(
      (hobby: string): ReactNode => <UserData key={v4()}>{hobby}</UserData>
    );
  };

  const getHobbiesListening = (hobbies: string[]): ReactNode => {
    return <Listening>{liElements(hobbies)}</Listening>;
  };

  return (
    <SimpsonsCardWrapper>
      <AvatarContainer>
        <Avatar src={avatarUrl} alt="avatar" />
      </AvatarContainer>
      <CardsBlock>
        <Titel>Name:</Titel>
        {firstName} {lastName}
      </CardsBlock>
      <CardsBlock>
        <Titel>Occupation:</Titel>
        <UserData>{occupation}</UserData>
      </CardsBlock>
      <CardsBlock>
        <Titel>Hobbies:</Titel>
        {getHobbiesListening(hobbies)}
      </CardsBlock>
    </SimpsonsCardWrapper>
  );
}

export default SimpsonsCard;
