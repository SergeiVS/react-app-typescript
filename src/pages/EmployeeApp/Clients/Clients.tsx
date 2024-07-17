import { useNavigate } from "react-router-dom";

import { PageWrapper, LinkButton, Link, Title } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <Title>Our clients</Title>
      <LinkButton>
        <Link to="/apple">Apple</Link>
      </LinkButton>
      <LinkButton>
        <Link to="/google">Google</Link>
      </LinkButton>
      <LinkButton>
        <Link to="/oracle">Oracle</Link>
      </LinkButton>
    </PageWrapper>
  );
}

export default Clients;
