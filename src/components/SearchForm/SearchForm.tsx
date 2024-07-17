import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { SearchFormProps } from "./types";
import { SearchFormContainer, ButtonControl, InputControl } from "./styles";
import { colors } from "styles/colors";

function SearchForm({
  value,
  onSubmit,
  onChange,
  disabled,
  color,
}: SearchFormProps) {
  return (
    <SearchFormContainer onSubmit={onSubmit}>
      <InputControl>
        <Input
          id="input-id"
          name="country-input"
          type="text"
          placeholder="Enter your country"
          label="Country"
          value={value}
          onChange={onChange}
        />
      </InputControl>
      <ButtonControl>
        <Button
          name={"Get Universities"}
          type="submit"
          disabled={disabled}
          backgroundColor={colors.OCEAN_GREEN}
        />
      </ButtonControl>
    </SearchFormContainer>
  );
}

export default SearchForm;
