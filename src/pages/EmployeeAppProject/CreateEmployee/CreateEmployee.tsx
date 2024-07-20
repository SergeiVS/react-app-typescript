import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { CreateEmployeeForm, ButtonContainer } from "./styles";

function CreateEmployee() {
  return (
    <CreateEmployeeForm>
      <Input
        label="Name*"
        id="name-id"
        name="name"
        type="text"
        value=""
        placeholder="John"
      />
      <Input
        label="Surname*"
        id="surname-id"
        name="surname"
        type="text"
        value=""
        placeholder="Johnson"
      />
      <Input
        label="Age*"
        id="age-id"
        name="age"
        type="number"
        value=""
        placeholder="25"
      />
      <Input
        label="Job Position"
        id="position-id"
        name="job-position"
        type="text"
        value=""
        placeholder="QA"
      />
      <ButtonContainer>
        <Button type="submit" name="Create" />
      </ButtonContainer>
    </CreateEmployeeForm>
  );
}
export default CreateEmployee;
