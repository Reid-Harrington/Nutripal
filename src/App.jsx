import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Scanner from "./pages/scanner";
import Progress from "./pages/progress";
import Navbar from "./components/Navbar";
import "./App.css";
import bg from "./assets/Background.webp"
function App() {
  return (
    <Router>
      <div>
        <div className="app-background"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
        <div className="bottom-half-background"></div>
      </div>
    </Router>
  );
}

export default App;
