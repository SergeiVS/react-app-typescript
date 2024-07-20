import { EmployeesCard, TextDiv, TextLabel, TextContent } from "./styles";

function Employees () {
    return (<EmployeesCard>
        <TextDiv>
            <TextLabel>Name</TextLabel>
            <TextContent></TextContent>
        </TextDiv>
        <TextDiv>
            <TextLabel>Surname</TextLabel>
            <TextContent></TextContent>
        </TextDiv>
        <TextDiv>
            <TextLabel>Age</TextLabel>
            <TextContent></TextContent>
        </TextDiv>
        <TextDiv>
            <TextLabel>Job Position</TextLabel>
            <TextContent></TextContent>
        </TextDiv>
    </EmployeesCard>)
} ;

export default Employees; 