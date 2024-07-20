import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";

import {
  LayoutWrapper,
  Header,
  Main,
  Link,
  Logo,
  LogoImg,
  NavigationContainer,
} from "./styles";

import { LayoutProps, Employee, PagesPaths } from "./types";

export const EmployeeProjectContext = createContext<Employee>({
  name: "",
  surName: "",
  age: 0,
  jobPosition: "",
});

function Layout_Team_1({ children }: LayoutProps) {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<Employee>({
    name: "",
    surName: "",
    age: 0,
    jobPosition: "",
  });

  const goToHomePage = () => {
    navigate(PagesPaths.HOME);
  };

  return (
    <EmployeeProjectContext.Provider value={employee}>
      <LayoutWrapper>
        <Header>
          <Logo onClick={goToHomePage}>
            <LogoImg
              src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png"
              alt=""
            />
          </Logo>
          <NavigationContainer>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.CREATE_EMPLOYEES}
            >
              Create Employee
            </Link>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.EMPLOYEES}
            >
              Employees
            </Link>
          </NavigationContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutWrapper>
    </EmployeeProjectContext.Provider>
  );
}

export default Layout_Team_1;
