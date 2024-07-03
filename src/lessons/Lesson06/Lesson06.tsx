import { type } from "os";
import "./styles.css";

function Lesson06() {
  let userFullName: string = "John Johnson";
  //   userFullName = 100; error
  userFullName = "John Doe";

  let hello = `Hello ${userFullName}`;
  //   hello = 100; error
  console.log(hello);

  let number1: number = 100;
  //   number1 = "200"; error
  number1 = 35.15;

  let number2: number = number1 / 0;
  console.log(number2 === Infinity);

  let isAdmin: boolean = true;
  //arrays
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  console.log(animals);
  //   animals.push(true) error

  const numbers: number[] = [1, 2, 3, 4, 5];

  const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number
  ] = ["name", "John", "age", 30, "name", "Sam", "age", 40];

  const sayHi = (personName: string): void => {
    console.log(`Hi, ${personName}`);
  };

  sayHi(userFullName);
  // sayHi(100) error
  interface Admin {
    isAdmin: boolean;
  }

  interface UserPet {
    pet?: string;
  }

  interface User extends Admin, UserPet {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
  }
  interface User {
    isFamily: boolean;
  }

  const user: User = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "QA",
    isAdmin: true,
    pet: "Dog",
    isFamily: true,
  };

  const user2: User = {
    firstName: "Jane",
    lastName: "Doe",
    age: 31,
    job: "FrontEnd",
    isAdmin: false,
    isFamily: true,
  };

  const isUserData: undefined = undefined;
  //   isUserData= 2 error

  let emptyEntuty: null = null;
  // emptyEntuty="hi"error

  let someVariable: any = "Some string";
  someVariable = 100; //ok

  const makeAlert: () => void = () => {
    alert("This is react typescript");
  };

  makeAlert();

  const add = (a: number, b: number): number => {
    return a + b;
  };

  console.log(add(2, 3));

  type UserDataFromSever = User | undefined | null;
  let userDataFromSever: UserDataFromSever = user2; //ok
  userDataFromSever = null; //ok

  type GlobalAnimalProps = { isAnimal: boolean };

  type Animal = {
    type: string;
    age: number;
    isWild: boolean;
    color: string;
    speed?: number;
  };

  type GlobalAbimal = GlobalAnimalProps & Animal;

  const animal1: GlobalAbimal = {
    isAnimal: true,
    type: "Tiger",
    age: 8,
    isWild: true,
    color: "Orange",
  };

  const animal2: GlobalAbimal = {
    isAnimal: true,
    type: "Lion",
    age: 6,
    isWild: true,
    color: "Yellow",
    speed: 74,
  };

  return <div className="lesson-wrapper">Lesson 06</div>;
}

export default Lesson06;
