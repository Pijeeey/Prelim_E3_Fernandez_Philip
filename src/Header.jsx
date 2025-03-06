import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success p-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">
          <i className="bi bi-house-door"></i> PJQF
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
              <Link className="nav-link text-white nav-hover" to="/">
                <i className="bi bi-house"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white nav-hover" to="/profile">
                <i className="bi bi-person"></i> Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white nav-hover" to="/settings">
                <i className="bi bi-gear"></i> Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;