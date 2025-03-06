import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../Home.css";


function Home() {
  return (
    <div className="home-container d-flex justify-content-center align-items-center vh-100">
      <div className="home-card d-flex flex-column align-items-center p-5 rounded shadow-lg bg-white">
      
        <h1 className="fw-bold text-success">Welcome to PJF Prelim Project</h1>
        <p className="text-secondary text-center">Prelim exam pa more :(</p>
      </div>
    </div>
  );
}

export default Home;
