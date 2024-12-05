import { Route, Routes } from "react-router-dom";
import "./assets/style/index.scss";
import Header from "./components/header/Header";
import { HOME } from "./constants/router";
import Main from "./page/main/Main";
import View from "./page/view/View";
import AllCardPage from "page/allCard/AllCardPage";
import Question from "page/question/Question";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={HOME} element={<Main />} />
        <Route path={`${HOME}/one`} element={<View spreadType={1} />} />
        <Route path={`${HOME}/three`} element={<View spreadType={2} />} />
        <Route path={`${HOME}/all-card`} element={<AllCardPage />} />
        {/* <Route path={`${HOME}/desc`} element={<Main />} /> */}
      </Routes>
    </div>
  );
}

export default App;
