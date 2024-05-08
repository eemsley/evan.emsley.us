import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Ronald from "./pages/Ronald";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ronald" element={<Ronald />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
