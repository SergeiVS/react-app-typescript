import { useState } from "react";

import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import JokeCard from "components/JokeCard/JokeCard";

import { Homework09WRapper, ButtonControl, BlindJokeWrapper } from "./styles";
import { Joke } from "./types";

function Homework09() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isButtonDisabled, setButtonDIsabled] = useState<boolean>(false);

  const getJoke = async () => {
    setButtonDIsabled(true);
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const result = await response.json();

    if (response.ok) {
      const newJoke: Joke = {
        setUp: result.setup,
        punchline: result.punchline,
      };
      setJoke(newJoke);
    } else {
      setModalOpen(true);
      setError("Joke download error");
    }
    setButtonDIsabled(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Homework09WRapper>
        <BlindJokeWrapper>
          {joke && <JokeCard setUp={joke.setUp} punchline={joke.punchline} />}
        </BlindJokeWrapper>
        {error && (
          <Modal open={isModalOpen} onClose={closeModal}>
            {error}
          </Modal>
        )}
        <ButtonControl>
          <Button
            name="GET A NEW JOKE"
            onClick={getJoke}
            disabled={isButtonDisabled}
          />
        </ButtonControl>
      </Homework09WRapper>
    </>
  );
}

export default Homework09;
