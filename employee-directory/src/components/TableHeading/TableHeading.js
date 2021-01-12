import React from "react";
import "./style.css";
// import API from "../../utils/API.js";

function TableHeading() {
  return (
    <thead class="thead-dark">
      <ul className="list-group search-results">
        <li className="list-group-item">
          <tr>
            <th scope="col" className="photo">photo</th>
            <th scope="col" className="photo">Name</th>
            <th scope="col" className="photo">Phone </th>
            <th scope="col" className="photo">Email</th>
            <th scope="col" className="photo">DOB</th>
          </tr>
        </li>
      </ul>
    </thead>
  );
}
export default TableHeading;
