import "./styles.css";
import { type } from "os";

function Homework06() {
  const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  type CarInfo = {
    brand: string;
    isDiesel: boolean;
    price: number;
  };

  const typedCars: CarInfo[] = cars.map((car) => {
    return {
      brand: car.brand,
      price: car.price,
      isDiesel: car.isDiesel,
    };
  });

  const carsCards = typedCars.map((car) => {
    const { brand, price, isDiesel } = car;
    const fuel = isDiesel ? "Diesel" : "Gas";
    return (
      // ключи не переданы т.к.typesctipt не знает v4
      <div className="car-card">
        <h1 className="brand-name">{brand}</h1>
        <div className="property-wrapper">
          <p className="title">Fuel:</p>
          <p className="property-value">{fuel}</p>
        </div>
        <div className="property-wrapper">
          <p className="title">Price:</p>
          <p className="property-value">$ {price}</p>
        </div>
      </div>
    );
  });
  return <div className="homework-wrapper">{carsCards}</div>;
}

export default Homework06;
