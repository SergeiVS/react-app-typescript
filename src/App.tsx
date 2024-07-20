import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";

import Layout from "components/Layout/Layout";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import Login from "pages/EmployeeApp/Login/Login";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Clients from "pages/EmployeeApp/Clients/Clients";
import Apple from "pages/EmployeeApp/Clients/Apple/Apple";
import Google from "pages/EmployeeApp/Clients/Google/Google";
import Oracle from "pages/EmployeeApp/Clients/Oracle/Oracle";
import { APP_ROUTES } from "constants/routes";

// import Lesson06 from "lessons/Lesson06/Lesson06";
// import Lesson07 from "lessons/Lesson07/Lesson07";
import Lesson08 from "lessons/Lesson08/Lesson08";
import Lesson09 from "lessons/Lesson09/Lesson09";
import Lesson10 from "lessons/Lesson10/Lesson10";
import Lesson11 from "lessons/Lesson11/Lesson11";
import Lesson13 from "lessons/Lesson13/Lesson13";

// import Homework06 from "homeworks/Homework06/Homework06";
import Homework07 from "homeworks/Homework07/Homework07";
import Homework08 from "homeworks/Homework08/Homework08";
import Homework09 from "homeworks/Homework09/Homework09";
import Homework11 from "homeworks/Homework11/Homework11";
import Homework13 from "homeworks/homework13/Homework13";

import Consultation03 from "consultations/Consultation03/Consultation03";

import Layout_Team_1 from "pages/EmployeeAppProject/Layout_Team_1/Layout_Team_1";
import CreateEmployee from "pages/EmployeeAppProject/CreateEmployee/CreateEmployee";
import Employees from "pages/EmployeeAppProject/Employees/Employees";
import { PagesPaths } from "pages/EmployeeAppProject/Layout_Team_1/types";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* 
      <Layout>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
          <Route path={APP_ROUTES.LOGIN} element={<Login />} />
          <Route path={APP_ROUTES.COUNTACT_US} element={<ContactUs />} />
          <Route path={APP_ROUTES.CLIENTS} element={<Clients />} />
          <Route path={APP_ROUTES.APPLE} element={<Apple />} />
          <Route path={APP_ROUTES.GOOGLE} element={<Google />} />
          <Route path={APP_ROUTES.ORACLE} element={<Oracle />} />

          <Route path="*" element="Page not found" />
        </Routes>
      </Layout> */}

      <Layout_Team_1>
        <Routes>
          <Route path={PagesPaths.HOME}></Route>
          <Route
            path={PagesPaths.CREATE_EMPLOYEES}
            element={<CreateEmployee />}
          />
          <Route path={PagesPaths.EMPLOYEES} element={<Employees />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout_Team_1>

      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Lesson08 /> */}
      {/* <Lesson09 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11 /> */}
      {/* <Lesson13 /> */}
      {/* <Homework06 /> */}
      {/* <Homework07 /> */}
      {/* <Homework08 /> */}
      {/* <Homework09 /> */}
      {/* <Homework11 /> */}
      {/* <Homework13 /> */}
      {/* <Consultation03 /> */}
    </BrowserRouter>
  );
}

export default App;
