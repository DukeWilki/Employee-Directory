import React from "react";
import "./style.css";


function EmployeeListSearch(props) {
  console.log('props', props)
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
