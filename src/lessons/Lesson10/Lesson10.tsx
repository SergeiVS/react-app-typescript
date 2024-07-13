import { useState } from "react";

import UniCard from "components/UniCard/UniCard";
import SearchForm from "components/SearchForm/SearchForm";

import { Lesson_10Div, Lesson_10Header, Lesson_10Cards } from "./styles";
import { University } from "./types";

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

// export interface UniCardProps{
//   name: string;
//    webSite: string [];
// }

function Lesson10() {
  return (
    <Lesson_10Div>
      <Lesson_10Header>
        <p>Universities</p>
        <SearchForm
          value="test velue"
          onChange={() => {}}
          onSubmit={() => {}}
        />
      </Lesson_10Header>
      <Lesson_10Cards>
        <UniCard name="Test Uni" webSite={["test uni website"]} />
      </Lesson_10Cards>
    </Lesson_10Div>
  );
}

export default Lesson10;
