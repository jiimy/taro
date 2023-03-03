import { Route, Link, Routes } from "react-router-dom";
import "./assets/style/index.scss";
import Header from "./components/header/Header";
import Main from "./page/main/Main";

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
