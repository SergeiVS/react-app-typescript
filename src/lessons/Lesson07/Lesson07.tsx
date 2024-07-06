import { useState } from "react";

import Button from "components/Button/Button";
import Counter from "components/Counter/Counter";

import "./styles.css";
import { WeatherCodes } from "./types";

// Создайте функцию, которая бы принимала бы следующие параметры:
//   код погоды и функция decode, которая дает расшифровку погоды по коду.
//   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
//   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
//   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
//   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
//   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
//   одном из методов switch-case:

function Lesson07() {
  const getWeatherDecode = (weatherCode: WeatherCodes): string => {
    switch (weatherCode) {
      case WeatherCodes.SQ: {
        return "Шквал";
      }
      case WeatherCodes.PO: {
        return "Пыльный ветер";
      }
      case WeatherCodes.FC: {
        return "Торнадо";
      }
      case WeatherCodes.BR: {
        return "Шквал";
      }
      case WeatherCodes.HZ: {
        return "Мгла";
      }
      case WeatherCodes.FU: {
        return "Дым";
      }
      case WeatherCodes.DS: {
        return "Пыльная буря";
      }
      case WeatherCodes.SS: {
        return "Песчаный шторм";
      }
      default: {
        return "Такого кода нет";
      }
    }
  };
  const showWeather = (
    weatherCode: WeatherCodes,
    decodeFunction: (weatherCode: WeatherCodes) => string
  ) => {
    console.log(decodeFunction(weatherCode));
  };

  showWeather(WeatherCodes.SS, getWeatherDecode);
  showWeather(WeatherCodes.DS, getWeatherDecode);
  showWeather(WeatherCodes.FC, getWeatherDecode);

  type ArrayGenerator<ValueType> = ValueType[];
  const someStringsArray: ArrayGenerator<string> = ["a", "b", "c"];
  const someNumbersArray: ArrayGenerator<number> = [1, 2, 3];

  interface ValueForMac {
    model: string;
    articul: number;
  }

  interface ShopItems<ValueType> {
    type: string;
    value: ValueType;
  }

  const item1: ShopItems<number> = {
    type: "TV",
    value: 1,
  };
  const item2: ShopItems<string> = {
    type: "TV",
    value: "1",
  };

  const item3: ShopItems<ValueForMac> = {
    type: "MacBook",
    value: {
      model: "X",
      articul: 25451,
    },
  };

  console.log(item1);
  console.log(item2);
  console.log(item3);

  /////////////////////////////////////////////////////////
  const state = useState<number>(0);

  const [count, setCount] = state;

  const onPlus = (): void => {
    setCount((prevValue: number): number => prevValue + 1);
  };

  const onMinus = (): void => {
    setCount((prevValue: number): number => prevValue - 1);
  };

  console.log(state);

  // const sendCountToServer= async()=>{
  // await response = await fetch("someUrl", {
  //   method: "Post",
  //   body:JSON.stringify({count:count})
  // })
  // }

  return (
    <div className="lesson-wrapper">
      <Counter count={count} onPlus={onPlus} onMinus={onMinus} />
      <Button
        name="Clear counter"
        onClick={() => {
          setCount(0);
        }}
      />
    </div>
  );
}

export default Lesson07;
