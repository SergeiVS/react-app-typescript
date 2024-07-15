import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

import UniCard from "components/UniCard/UniCard";
import SearchForm from "components/SearchForm/SearchForm";

import {
  Lesson_10Div,
  Lesson_10Header,
  Lesson_10Cards,
  Title,
  StyledError,
  TitelDiv,
  BlancP,
} from "./styles";
import { MAX_UNIVERSITIES, Universities, University } from "./types";

function Lesson10() {
  const [countryName, setCountry] = useState<string | undefined>("");
  const [searchResult, setSearchResult] = useState<Universities | undefined>(
    undefined
  );
  const [searchError, setSearchError] = useState<string | undefined>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [countryNameToRender, setCountryNameToRender] = useState<
    string | undefined
  >(undefined);

  const searchUrl: string = `http://universities.hipolabs.com/search?country=${countryName}`;
  // const searchUrl: string = `http://universities.hipolas.com/search?counry=${countryName}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const getRequestResults = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchError(undefined);
    setSearchResult(undefined);
    setIsDisabled(true);

    if (countryName) {
      try {
        axios.get<Universities>(searchUrl).then((response) => {
          const limitResponse: Universities = response.data.slice(
            0,
            MAX_UNIVERSITIES
          );

          setSearchResult(limitResponse);

          if (limitResponse.length === 0) {
            const message: string = "No universities found!";
            setSearchError(message);
            alert(message);
          }
        });
      } catch (error: any) {
        setSearchError("Some Network Error");
        alert(searchError);
      } finally {
        setIsDisabled(false);
        // setCountryNameToRender(countryName);
      }
    } else {
      setSearchResult([]);
      setSearchError("Country name could not be empty");
      setIsDisabled(false);
    }
  };

  const uniCardsToRender = (): ReactNode[] | undefined => {
    return searchResult?.map((uniObject: University): ReactNode => {
      return (
        <UniCard
          key={v4()}
          name={uniObject.name}
          webSite={uniObject.web_pages[0]}
        />
      );
    });
  };

  return (
    <Lesson_10Div>
      <Lesson_10Header>
        <TitelDiv>
          <Title>Top universities of</Title>
          <BlancP>{searchResult && <Title>{countryName}</Title>}</BlancP>
        </TitelDiv>
        <SearchForm
          value={countryName}
          onChange={handleChange}
          onSubmit={getRequestResults}
          disabled={isDisabled}
        />
      </Lesson_10Header>
      <Lesson_10Cards>
        {searchResult && uniCardsToRender()}
        {searchError && <StyledError>{searchError}</StyledError>}
      </Lesson_10Cards>
    </Lesson_10Div>
  );
}

export default Lesson10;
