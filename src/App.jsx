
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Setting";
import Header from "./Header";

function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    settings: { darkMode: false },
  });

  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: { darkMode: !prevUser.settings.darkMode },
    }));
  };

  return (

    <Router>
      <div className={user.settings.darkMode ? "bg-dark text-white" : "bg-light text-dark"}>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings user={user} toggleDarkMode={toggleDarkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
   
  );
}

export default App;
