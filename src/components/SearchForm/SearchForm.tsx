import { MouseEvent } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { SearchFormContainer, Title } from "./styles";

function SearchForm() {
  const showUniversititiesInfo = (event: MouseEvent): void => {

  };

  return (
    <SearchFormContainer>
      <Title>World's top universities</Title>
       <Input  id="input-id"
          name=""
          type=""
          placeholder="Enter your country"
          label="Country"
          value=""
          onChange ={()=>{}}/>
       <Button name={"Get Universities"} onClick={showUniversititiesInfo} type="submit"/>
    </SearchFormContainer>
  );
}

export default SearchForm;
