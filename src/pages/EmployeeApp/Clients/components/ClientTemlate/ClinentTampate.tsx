import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import { ClientsTamplateProps } from "./types";

import {
  PageWrapper,
  ButtonContainer,
  Link,
  Image,
  ClientInfo,
} from "./styles";
import { colors } from "styles/colors";

function ClientTamplate(templateProps: ClientsTamplateProps) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <Link href={templateProps.link} target="blanc">
        <Image src={templateProps.imgSrc} />
      </Link>
      <ClientInfo>{templateProps.children}</ClientInfo>
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

export default ClientTamplate;
