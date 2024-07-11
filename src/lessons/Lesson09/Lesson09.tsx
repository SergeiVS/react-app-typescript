import { ChangeEvent, useState, useEffect } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { Lesson_09Wrapper, InputControl, ButtonControl } from "./styles";

function Lesson_09() {
  const [searchInputValue, setSearchInputValue] = useState("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchInputValue(event.target.value);
  };

  const onSearch = () => {
    console.log(searchInputValue);
  };

  console.log("render");

  useEffect(() => {
    console.log("mounting");
  }, []);

  useEffect(() => {
    console.log("updating");
  }, [searchInputValue]);

  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, [searchInputValue]);

  console.log(`value: ${searchInputValue}`);
  ////////////////////////////////////////////////////////////////////////////

  const [searchRandonCatFact, setSearchRandonCatFact] = useState<
    string | undefined
  >(undefined);
  const [catFast, setCatFact] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchRandonCatFact(event.target.value);
  };

  const getRandomCatFact = async () => {
    // setSearchRandonCatFact(undefined);
    // setError(undefined);
    const response = await fetch("https://catfact.ninja/fact");
    const result = await response.json();
    if (response.ok) {
      return setCatFact(result.fact);
    } else {
      return setError("Error message during random joke request");
    }
  };

  useEffect(() => {
    getRandomCatFact();
  }, [searchRandonCatFact]);

  return (
    <Lesson_09Wrapper>
      <InputControl>
        <Input
          id="search-input"
          label="Search"
          name="search"
          placeholder="Enter item for search"
          value={searchInputValue}
          onChange={onChangeInput}
        />
      </InputControl>
      <ButtonControl>
        <Button name="Search" onClick={onSearch} />
      </ButtonControl>
      <InputControl>
        <Input
          id="search-input"
          label="Cat Fact"
          name="search"
          placeholder="Enter leter for get some cat fact"
          value={searchRandonCatFact}
          onChange={onChange}
        />
      </InputControl>
      {searchRandonCatFact && <p>{catFast}</p>}
      {error && <p>{error}</p>}
    </Lesson_09Wrapper>
  );
}

export default Lesson_09;
