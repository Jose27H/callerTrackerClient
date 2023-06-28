import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/header/Navbar";
import Home from "./pages/1.home/Home";
import Services from "./pages/2.services/Services";
import Portfolio from "./pages/3.portfolio/Portfolio";
import Golf from "./pages/4.golf/golf";
import GProfile from "./components/golfiles/Gprofile";
import Tracker from "./pages/5.tracker/tracker";
import PatientTable from "./pages/2.services/PatientList";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Golf" element={<Golf />} />
          <Route path="/Golf/Gprofile" element={<GProfile />} />
          <Route path="/Tracker" element={<Tracker />} />
          <Route path="/Patienttable" element={<PatientTable />} />
        </Routes>
      </Router>
    </div>
  );
}
