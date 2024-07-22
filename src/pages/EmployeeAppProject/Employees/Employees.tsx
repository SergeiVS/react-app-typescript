import { useContext } from "react";

import { EmployeesCard, TextDiv, TextLabel, TextContent } from "./styles";
import { EmployeeAppContext } from "pages/EmployeeAppProject/contexts/EmployeeAppContext";

function Employees() {
  const context = useContext(EmployeeAppContext);

  return (
    <EmployeesCard>
      <TextDiv>
        <TextLabel>Name</TextLabel>
        <TextContent>{context.employee.name}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Surname</TextLabel>
        <TextContent>{context.employee.surName}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Age</TextLabel>
        <TextContent>{context.employee.age}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Job Position</TextLabel>
        <TextContent>{context.employee.jobPosition}</TextContent>
      </TextDiv>
    </EmployeesCard>
  );
}

export default Employees;
