import { ReactNode } from "react";
import { v4 } from "uuid";

import { User } from "./types";
import "./styles.css";

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

function Card(user: User) {
  return (
    <div className="card">
      <div className="avatar-container">
        <img className="avatar" src={user.avatarUrl} alt="avatar" />
      </div>
      <div className="cards-block">
        <p className="title">Name:</p>
        {fullName(user.firstName, user.lastName)}
      </div>
      <div className="cards-block">
        <p className="title">Occupation:</p>
        <p className="user-data">{user.occupation}</p>
      </div>
      <div className="cards-block">
        <p className="title">Hobbies:</p>
        {getHobbiesListening(user.hobbies)}
      </div>
    </div>
  );
}

export default Card;
