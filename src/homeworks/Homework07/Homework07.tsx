import SimpsonsCard from "components/SimpsonsCard/SimpsonsCard";

import { testUser } from "./testUser";
import "./styles.css";

function Homework07() {
  return (
    <div className="homework-wrapper">
      <SimpsonsCard
        firstName={testUser.firstName}
        lastName={testUser.lastName}
        occupation={testUser.occupation}
        hobbies={testUser.hobbies}
        avatarUrl={testUser.avatarUrl}
      />
    </div>
  );
}
export default Homework07;
