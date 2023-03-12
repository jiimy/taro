import React from "react";
import {
  useLocation,
  Route,
  Link,
  Routes,
  unstable_HistoryRouter as Router,
} from "react-router-dom";
import Main from "./main/Main";
import View from "./view/View";


const RoutePage = () => {
  return (
    <div>
      라우트페이지
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/one" element={<View />} />
        <Route path="/three" element={<View />} />
      </Routes>
    </div>
  );
};

export default RoutePage;
