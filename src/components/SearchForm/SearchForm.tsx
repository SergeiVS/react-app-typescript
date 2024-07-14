import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { SearchFormProps } from "./types";
import { SearchFormContainer, Title } from "./styles";

function SearchForm({ value, onSubmit, onChange, disabled }: SearchFormProps) {
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
      <Button name={"Get Universities"} type="submit" disabled={disabled} />
    </SearchFormContainer>
  );
}

export default SearchForm;
