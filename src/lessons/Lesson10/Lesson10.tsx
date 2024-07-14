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

  const searchUrl: string = `http://universities.hipolabs.com/search?country=${countryName}`;

  //testvalue
  const testUnis: Universities | undefined = [
    {
      country: "Estonia",
      name: "Estonian Academy of Arts",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["artun.ee"],
      web_pages: ["http://www.artun.ee/"],
    },
    {
      country: "Estonia",
      name: "Estonian Business School",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["ebs.ee"],
      web_pages: ["http://www.ebs.ee/"],
    },
    {
      country: "Estonia",
      name: "Estonian Academy of Music and Theatre",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["ema.edu.ee"],
      web_pages: ["http://www.ema.edu.ee/"],
    },
    {
      country: "Estonia",
      name: "Estonian University of Life Sciences",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["emu.ee"],
      web_pages: ["http://www.emu.ee/"],
    },
    {
      country: "Estonia",
      name: "Tartu Health Care College",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["nooruse.ee"],
      web_pages: ["http://www.nooruse.ee/"],
    },
    {
      country: "Estonia",
      name: "Estonian Academy of Security Sciences",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["sisekaitse.ee"],
      web_pages: ["http://www.sisekaitse.ee/"],
    },
    {
      country: "Estonia",
      name: "University of Applied Sciences",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["tktk.ee"],
      web_pages: ["http://www.tktk.ee/"],
    },
    {
      country: "Estonia",
      name: "Tallinn University",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["tlu.ee"],
      web_pages: ["http://www.tlu.ee/"],
    },
    {
      country: "Estonia",
      name: "Tallinn University of Technology",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["ttu.ee"],
      web_pages: ["http://www.ttu.ee/"],
    },
    {
      country: "Estonia",
      name: "University of Tartu",
      alpha_two_code: "EE",
      "state-province": null,
      domains: ["ut.ee"],
      web_pages: ["http://www.ut.ee/"],
    },
  ];

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
      });
    } catch (error) {
      setSearchError("Some Network Error");
      console.error(error);
    }
  };

  const uniCardsToRender = (): ReactNode[] | undefined => {
    return searchResult?.map((uniObject: University): ReactNode => {
      console.log(uniObject);
      //как мы и говорили я поменял массив сайтов на единственный стринг(первый из массива)
      return <UniCard name={uniObject.name} webSite={uniObject.web_pages[0]} />;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getRequestResults();
    // setSearchResult(testUnis);
  };

  return (
    <Lesson_10Div>
      <Lesson_10Header>

      <Title>Top universities of "value"</Title>
        <SearchForm
          value={countryName}
          onChange={handleChange}
          onSubmit={handleSubmit}
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
