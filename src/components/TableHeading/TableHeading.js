import React from "react";
import "./style.css";

function TableHeading(props) {
// Render table heading
  return (
    <thead className="thead-dark">
          <tr >
            <th scope="col" className="datafeild">Photo</th>
            <th scope="col" className="datafeild" id="name" onClick={() => props.sortByFirstName('name')}>Name<span className="pointer"></span></th>
            <th scope="col" className="datafeild wide">Email</th>
            <th scope="col" className="datafeild">Phone </th>
            <th scope="col" className="datafeild">Date of Birth</th>
          </tr>     
    </thead>
  );
}
export default TableHeading;

