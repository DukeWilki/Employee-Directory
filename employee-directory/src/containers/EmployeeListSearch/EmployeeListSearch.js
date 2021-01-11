import React from "react";
import "./style.css";


function EmployeeListSearch() {
  return (
    <div className="container">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default EmployeeListSearch;
