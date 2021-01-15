import React from "react";
import "./style.css";
// import API from "../../utils/API.js";

function TableHeading() {

  const setSortedField = () => {
    console.log("object");
  };

  return (
    <thead class="thead-dark">
      <ul className="list-group search-results">
        <li className="list-group-item">
          <tr>
            <th scope="col" className="datafeild" >Photo</th>
            <th scope="col" className="datafeild" onClick={() => setSortedField('name')}>Name</th>
            {/* <th scope="col" className="datafeild">Name</th> */}
            <th scope="col" className="datafeild wide">Email</th>
            <th scope="col" className="datafeild">Phone </th>
            <th scope="col" className="datafeild">Date of Birth</th>
          </tr>
        </li>
      </ul>
    </thead>
  );
}
export default TableHeading;
