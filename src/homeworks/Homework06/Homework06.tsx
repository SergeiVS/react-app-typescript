import "./styles.css";
import { v4 } from "uuid";
import { ReactNode } from "react";
import { Car } from "./types";

function Homework06() {
  
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  cars.push({ brand: "Aston Martin", isDiesel: false, price: 120000 });

  const carsCards: ReactNode[] = cars.map((carObject: Car) => {
    const { brand, price, isDiesel } = carObject;
    const fuel: string = isDiesel ? "Diesel" : "Gas";
    return (
      <div key={v4()} className="car-card">
        <h1 className="brand-name">{brand}</h1>
        <div className="property-wrapper">
          <p className="title">Fuel:</p>
          <p className="property-value">{fuel}</p>
        </div>
        <div className="property-wrapper">
          <p className="title">Price:</p>
          <p className="property-value">{`$ ${price}`}</p>
        </div>
      </div>
    );
  });

  return <div className="homework-wrapper">{carsCards}</div>;
}

export default Homework06;
