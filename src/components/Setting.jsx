import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Settings = ({ user, toggleDarkMode }) => {
  return (
    <div className={user.settings.darkMode ? "bg-dark text-white p-4 vh-100" : "bg-light text-dark p-4 vh-100"}>
      <h2>Settings</h2>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeToggle"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label" htmlFor="darkModeToggle">
          Enable Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Settings;