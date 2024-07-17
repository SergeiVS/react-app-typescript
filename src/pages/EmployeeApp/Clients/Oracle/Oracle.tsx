import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import {
  PageWrapper,
  ButtonContainer,
  Link,
  Image,
  ClientInfo,
} from "./styles";
import { colors } from "styles/colors";

function Oracle() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <Link href="https://www.oracle.com/" target="blanc">
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbHejhqbAKrOp2sJNWI1UH1UWz8D2ASv7tA&s" />
      </Link>
      <ClientInfo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        sagittis nisl ac eros tempor, vel commodo purus fringilla. Praesent ac
        nunc sapien. Nulla pretium massa eu ex consectetur, ac hendrerit ipsum
        luctus. Ut auctor fringilla lorem vitae iaculis. Pellentesque viverra mi
        non dictum faucibus. Mauris posuere urna in elit placerat euismod. Nunc
        id euismod lectus. Nam porta tortor a diam pretium, in aliquam sapien
        mollis. Nam malesuada nisi leo, quis sodales diam pellentesque sed.
        Vivamus consequat a diam eget euismod. Nam vehicula non ex aliquet
        sodales. Pellentesque vel orci venenatis, sodales ligula id,
        sollicitudin lorem. Quisque et enim accumsan, ultrices ante at, luctus
        dolor. Quisque rutrum, nunc at posuere maximus, nunc massa tincidunt
        quam, at tincidunt metus erat quis ante. Nulla in pharetra augue.
        Vestibulum porta sapien mi, nec consequat ipsum mattis vel. Duis in
        tempus sapien. Sed sed magna quis nibh pharetra consequat vel in lorem.
        Curabitur nisi mi, dictum sed dui a, aliquet iaculis turpis. In congue
        orci non felis ornare, ac scelerisque justo dapibus. Pellentesque varius
        ligula non metus condimentum eleifend. Donec suscipit mauris ante, in
        congue magna feugiat in.
      </ClientInfo>
      <ButtonContainer>
        <Button
          name="Go back"
          onClick={goBack}
          backgroundColor={colors.OCEAN_GREEN}
        />
      </ButtonContainer>
    </PageWrapper>
  );
}

export default Oracle;
