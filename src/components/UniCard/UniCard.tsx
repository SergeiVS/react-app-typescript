import {UniCardProps} from "./types";
import {CardWrapper, CardsBlock, Titel, UniName, UniPage} from "./styles"


function UniCard ({name, webSite}: UniCardProps ){
    return  <CardWrapper>
    <CardsBlock>
      <Titel>Name:</Titel>
      <UniName> {name}</UniName>
    </CardsBlock>
    <CardsBlock>
      <Titel>Website:</Titel>
      <UniPage>{webSite}</UniPage>
    </CardsBlock>
  </CardWrapper>
}

export default UniCard;