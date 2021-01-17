// import React from "react";
import React, { useState, useEffect } from "react";
import "./style.css";
import App from "../../App";


function EmployeeListSearch(props) {
  console.log('props:', props.results)
  return (
    <form className="search">
      <div className="form-group">
        {/* <label htmlFor="language">Search Term:</label> */}
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control searchbar"
          placeholder="Search name here"
          id="term"
        />
      </div>
    </form>
  );
}

export default EmployeeListSearch;
