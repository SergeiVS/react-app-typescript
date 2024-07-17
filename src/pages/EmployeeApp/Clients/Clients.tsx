import { PageWrapper, LinkButton, Link, Title } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <Title>Our clients</Title>

      <Link
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to="/apple"
      >
        Apple
      </Link>

      <Link
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to="/google"
      >
        Google
      </Link>

      <Link
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to="/oracle"
      >
        Oracle
      </Link>
    </PageWrapper>
  );
}

export default Clients;
