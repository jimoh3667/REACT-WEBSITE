import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
