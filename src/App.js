import { useEffect, useState } from "react";
import { useLocation, Route, Link, Routes } from "react-router-dom";
import "./assets/style/index.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import history from "./hooks/useHistory";
import { HOME } from "./constants/router";
import { cardState, init } from "./redux/card";
import Header from "./components/header/Header";
import Main from "./page/main/Main";
import View from "./page/view/View";
import Login from "./page/Login";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.value);
  const [locate, setLocate] = useState("");

  // console.log('cardcount', card)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={HOME} element={<Main />} />
        <Route path={`${HOME}/one`} element={<View count={1}/>} />
        <Route path={`${HOME}/three`} element={<View count={3}/>} />
      </Routes>
    </div>
  );
}

export default App;


