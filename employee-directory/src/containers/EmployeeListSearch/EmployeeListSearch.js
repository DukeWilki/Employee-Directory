import React, { useState, useEffect } from "react";
import "./style.css";


function EmployeeListSearch(props) {
  // Render input feild
  return (
    <form className="search">
      <div className="form-group">
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
