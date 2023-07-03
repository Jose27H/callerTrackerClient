import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/1.home/Home";
import Services from "./pages/2.services/Services";
import WeekPlanner from "./pages/3.portfolio/WeekPlanner";
import Golf from "./pages/4.golf/golf";
import GProfile from "./components/golfiles/Gprofile";
import Tracker from "./pages/5.tracker/tracker";
import PatientTable from "./pages/2.services/PatientList";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const authKey = "weird-authentication-token"; // Change this to your desired token

  useEffect(() => {
    // Check if authentication token is stored in session storage
    const storedToken = sessionStorage.getItem(authKey);
    if (storedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Check if the password is correct
    if (password === "Hyperbaric@33") {
      const token = generateRandomToken(); // Generate a random token
      setIsAuthenticated(true);
      // Store authentication token in session storage
      sessionStorage.setItem(authKey, token);
    } else {
      alert("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Remove authentication token from session storage
    sessionStorage.removeItem(authKey);
  };

  const generateRandomToken = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 32; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  };

  return (
    <div>
      <Router>
        {isAuthenticated ? (
          <>
            <Navbar onLogout={handleLogout} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Schedule" element={<WeekPlanner />} />
              <Route path="/Golf" element={<Golf />} />
              <Route path="/Golf/Gprofile" element={<GProfile />} />
              <Route path="/Tracker" element={<Tracker />} />
              <Route path="/Patienttable" element={<PatientTable />} />
            </Routes>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <div>
              <h2>Please enter the password to access the app:</h2>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="border p-2 mb-2"
              />
              <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
};

export default App;
