import React from "react";
import "./style.css";


function EmployeeListHero() {
  // Render hero section
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">
            Search employees by first name, or click "name" to sort
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeListHero;
