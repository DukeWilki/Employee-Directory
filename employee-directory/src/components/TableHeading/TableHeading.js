import React from "react";
import "./style.css";
// import API from "../../utils/API.js";

function TableHeading() {
  return (
    <thead class="thead-dark">
      <ul className="list-group search-results">
        <li className="list-group-item">
          <tr>
            <th scope="col" className="datafeild">photo</th>
            <th scope="col" className="datafeild">Name</th>
            <th scope="col" className="datafeild wide">Email</th>
            <th scope="col" className="datafeild">Phone </th>
            <th scope="col" className="datafeild">DOB</th>
          </tr>
        </li>
      </ul>
    </thead>
  );
}
export default TableHeading;
