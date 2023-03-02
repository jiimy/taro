import { Route, Link, Routes } from "react-router-dom";
import './assets/style/index.scss';
import Main from "./page/main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
