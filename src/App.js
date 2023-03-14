import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/style/index.scss";
import Header from "./components/header/Header";
import { HOME } from "./constants/router";
import Main from "./page/main/Main";
import View from "./page/view/View";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={HOME} element={<Main />} />
        <Route path={`${HOME}/one`} element={<View spreadType={1} />} />
        <Route path={`${HOME}/three`} element={<View spreadType={2} />} />
      </Routes>
    </div>
  );
}

export default App;
