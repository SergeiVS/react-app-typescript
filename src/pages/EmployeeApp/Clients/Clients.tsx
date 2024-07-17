import { PageWrapper, Link, Title, ClientsLinks } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <Title>Our clients</Title>
      <ClientsLinks>
        <Link to="/clients/apple">Apple</Link>
        <Link to="/clients/google">Google</Link>
        <Link to="/clients/oracle">Oracle</Link>
      </ClientsLinks>
    </PageWrapper>
  );
}

export default Clients;
