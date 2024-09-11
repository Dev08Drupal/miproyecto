import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Actividad1 from "./pages/Actividad1";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./assets/styles/main.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main container">
          <Routes>
            <Route path="/miproyecto/" element={<Home />} />
            <Route path="/actividad1" element={<Actividad1 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
