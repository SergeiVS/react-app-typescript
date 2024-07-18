import { PageWrapper, Link, Title, ClientsLinks } from "./styles";
import { APP_ROUTES } from "constants/routes";

function Clients() {
  return (
    <PageWrapper>
      <Title>Our clients</Title>
      <ClientsLinks>
        <Link to={APP_ROUTES.APPLE}>Apple</Link>
        <Link to={APP_ROUTES.GOOGLE}>Google</Link>
        <Link to={APP_ROUTES.ORACLE}>Oracle</Link>
      </ClientsLinks>
    </PageWrapper>
  );
}

export default Clients;
