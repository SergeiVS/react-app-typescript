import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import axios from "axios";

import UniCard from "components/UniCard/UniCard";
import SearchForm from "components/SearchForm/SearchForm";

import { Lesson_10Div, Lesson_10Header, Lesson_10Cards, Title } from "./styles";
import { MAX_UNIVERSITIES, Universities, University } from "./types";

// 1. Разместите на странице Input с label="Country", в который пользователь может ввести название страны
// 2. Разместите на странице Button "Get Universities", по клику на которую, отправляется GET запрос на http://universities.hipolabs.com/search?country=COUNTRY
// 3. Используйте для запросов axios
// 4. Если в ответе на запрос пришли нормальные данные(запрос выполнен успешно), то разместите данные в стейте, а затем отобразите на стрнице в виде каточек
// Сохраняйте не более 15 обьектов в массиве
// 5. При повторном нажатии на кнопку, выполните новый GET запрос на http://universities.hipolabs.com/search?country=COUNTRY и  получите новые данные, и обновите стейт
// 6. При получении ошибки, положите в отдельные стейт данные об ошибке с соббщением "Some Network Error"
// 7. Стили на ваше усмотрение, контент тоже на ваше усмотрение
// 8. Все нужно делать в компоненте Lesson_10

// {"country": "Poland", "name": "Zachodniopomorska School of Science and Engineering", "alpha_two_code": "PL",
// "state-province": null, "domains": ["zut.edu.pl"], "web_pages": ["http://www.zut.edu.pl/"]

function Lesson10() {

  const [countryName, setCountry] = useState<string | undefined>("");
  const [searchResult, setSearchResult] = useState<Universities | undefined>(
    []
  );
  const [searchError, setSearchError] = useState<string | undefined>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [countryNameToRender, setCountryNameToRender] = useState<
    string | undefined
  >(undefined);

  const searchUrl: string = `http://universities.hipolabs.com/search?country=${countryName}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const getRequestResults = async () => {

    try {
      axios.get<Universities>(searchUrl).then((response) => {
        const limitResponse: Universities = response.data.slice(
          0,
          MAX_UNIVERSITIES
        );

        setSearchResult(limitResponse);
        console.log(limitResponse.length);

        if (limitResponse.length == 0) {
          const message: string = "No universities found!";
          setSearchError(message);
          alert(message);
        }
      });
    } catch (error) {
      setSearchError("Some Network Error");
      alert(searchError);
    }
  };

  const uniCardsToRender = (): ReactNode[] | undefined => {
    return searchResult?.map((uniObject: University): ReactNode => {
      return <UniCard name={uniObject.name} webSite={uniObject.web_pages[0]} />;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsDisabled(true);
    getRequestResults();
    setSearchResult(searchResult);
    setCountryNameToRender(countryName);
    setIsDisabled(false);
  };

  return (
    <Lesson_10Div>
      <Lesson_10Header>
        <Title>Top universities of {countryNameToRender}</Title>
        <SearchForm
          value={countryName}
          onChange={handleChange}
          onSubmit={handleSubmit}
          disabled={isDisabled}
        />
      </Lesson_10Header>
      <Lesson_10Cards>
        {searchResult && uniCardsToRender()}
        {searchError && "Some search error"}
      </Lesson_10Cards>
    </Lesson_10Div>
  );
}

export default Lesson10;
