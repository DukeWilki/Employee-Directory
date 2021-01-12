import React from "react";
import "./style.css";
// import API from "../../utils/API.js";

function TableHeading() {
  return (
    <thead class="thead-dark">
      <ul className="list-group search-results">
        <li className="list-group-item">
          <tr>
            <th scope="col" class="Photo">Photo</th>
            <th scope="col" class="Photo">Name</th>
            <th scope="col" class="Photo">Phone </th>
            <th scope="col" class="Photo">Email</th>
            <th scope="col" class="Photo">DOB</th>
          </tr>
        </li>
      </ul>
    </thead>
  );
}
export default TableHeading;
