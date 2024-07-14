
import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { SearchFormProps } from "./types";
import { SearchFormContainer, Title } from "./styles";

function SearchForm({ value, onSubmit, onChange }: SearchFormProps) {

  return (
    <SearchFormContainer onSubmit={onSubmit}>
      <Title>World's top universities</Title>
      <Input
        id="input-id"
        name="country-input"
        type="text"
        placeholder="Enter your country"
        label="Country"
        value={value}
        onChange={onChange}
      />
      <Button name={"Get Universities"} type="submit"/>
    </SearchFormContainer>
  );
}

export default SearchForm;
