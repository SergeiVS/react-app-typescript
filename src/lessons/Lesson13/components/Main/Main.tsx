import { useState, createContext } from "react";

import Button from "components/Button/Button";
import Section from "lessons/Lesson13/components/Section/Section";

import { UserData } from "./types";
import { MainTitle, MainWrapper, ButtonContainer } from "./styles";

export const MainContext = createContext<UserData | undefined>({
  fullName: "",
  age: 0,
  position: "",
});

function Main() {
  const [userData, setUserData] = useState<UserData | undefined>();

  const getUserData = () => {
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      position: "QA",
    };
    setUserData(userResponse);
  };

  return (
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <ButtonContainer>
          <Button name="Get User Data" onClick={getUserData} />
        </ButtonContainer>
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
