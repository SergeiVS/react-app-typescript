import { JokeProps } from "./types";
import { StyledJokeCard, JokeContainer, Joke } from "./styles";

function JokeCard({ setUp, punchline }: JokeProps) {
  return (
    <>
      <StyledJokeCard>
        <JokeContainer>
          <Joke>{setUp}</Joke>
          <Joke>{punchline}</Joke>
        </JokeContainer>
      </StyledJokeCard>
    </>
  );
}

export default JokeCard;
