import { ReactNode } from "react";
import { v4 } from "uuid";

import { SimpsonsCardProps } from "./types";
import "./styles.css";


function SimpsonsCard({
  firstName,
  lastName,
  avatarUrl,
  occupation,
  hobbies,
}: SimpsonsCardProps) {

  const fullName = (firstName: string, lastName: string): ReactNode => {
    return <p className="user-data">{`${firstName} ${lastName}`}</p>;
  };

const liElements = (hobbies: string[]): ReactNode[] => {
      return hobbies.map(
        (hobby: string): ReactNode => (
          <li key={v4()} className="user-data">
            {hobby}
          </li>
        )
      );
    };

  const getHobbiesListening = (hobbies: string[]): ReactNode => {
    

    return <ul className="listening">{liElements(hobbies)}</ul>;
  };

  return (
    <div className="card">
      <div className="avatar-container">
        <img className="avatar" src={avatarUrl} alt="avatar" />
      </div>
      <div className="cards-block">
        <p className="title">Name:</p>
        {fullName(firstName, lastName)}
      </div>
      <div className="cards-block">
        <p className="title">Occupation:</p>
        <p className="user-data">{occupation}</p>
      </div>
      <div className="cards-block">
        <p className="title">Hobbies:</p>
        {getHobbiesListening(hobbies)}
      </div>
    </div>
  );
}

export default SimpsonsCard;
