// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { Hoi } from "./pages/Hoi";

import { ActionButton } from "./components/ActionButton";
const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
        <li>
          <Link to="/hoi">あっちむいてほい</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/hoi" element={<Hoi />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
