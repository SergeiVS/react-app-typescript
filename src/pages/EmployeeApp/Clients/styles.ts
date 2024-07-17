import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { colors } from "styles/colors";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 30px;
`;

export const ClientsLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Link = styled(NavLink)`
  color: ${colors.LABEL};
  font-size: 35px;
  text-decoration: none;
`;
