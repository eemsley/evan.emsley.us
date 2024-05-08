import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import useScrollDirection from "./hooks/useScrollDirection";
import useScrollLocation from "./hooks/useScrollLocation";
import Ronald from "./pages/Ronald";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  const scrollDirection = useScrollDirection();
  const position = useScrollLocation();

  return (
    <BrowserRouter>
      <div className="absolute w-full -top-24 bg-slate-50">
        <div
          className={`sticky ${
            scrollDirection === "down" ? "-top-16" : "top-0"
          }  ${position === 0 ? "bg-slate-200" : "bg-slate-200/80"}
          h-16 transition-all duration-250 ease-in-out`}
        >
          <Header />
        </div>

        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/ronald" element={<Ronald />} />
          </Routes>
        </div>
        <div className="h-[5%] min-h-6 w-full sticky">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
