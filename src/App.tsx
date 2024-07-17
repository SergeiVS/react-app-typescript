import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";

import Layout from "components/Layout/Layout";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import Login from "pages/EmployeeApp/Login/Login";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";

// import Lesson06 from "lessons/Lesson06/Lesson06";
// import Lesson07 from "lessons/Lesson07/Lesson07";
import Lesson08 from "lessons/Lesson08/Lesson08";
import Lesson09 from "lessons/Lesson09/Lesson09";
import Lesson10 from "lessons/Lesson10/Lesson10";
import Lesson11 from "lessons/Lesson11/Lesson11";

// import Homework06 from "homeworks/Homework06/Homework06";
import Homework07 from "homeworks/Homework07/Homework07";
import Homework08 from "homeworks/Homework08/Homework08";
import Homework09 from "homeworks/Homework09/Homework09";
import Homework11 from "homeworks/Homework11/Homework11";

import Consultation03 from "consultations/Consultation03/Consultation03";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>

      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Lesson08 /> */}
      {/* <Lesson09 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11 /> */}
      {/* <Homework06 /> */}
      {/* <Homework07 /> */}
      {/* <Homework08 /> */}
      {/*<Homework09 />*/}
      {/* <Homework11 /> */}
      {/* <Consultation03 /> */}
    </BrowserRouter>
  );
}

export default App;
