import { useEffect, useState } from "react";
import { useLocation, Route, Link, Routes } from "react-router-dom";
import "./assets/style/index.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import history from "./hooks/useHistory";
import { cardState, init } from "./redux/card";
import Header from "./components/header/Header";
import Main from "./page/main/Main";
import View from "./page/view/View";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.value);
  const [locate, setLocate] = useState("");

  let ll = window.location.hash.split("/")[1];

  console.log("redux", location.pathname.split("/")[1]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/one" element={<View />} />
        <Route path="/three" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
