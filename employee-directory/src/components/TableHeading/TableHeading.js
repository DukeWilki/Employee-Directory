import React from "react";
import "./style.css";
// import API from "../../utils/API.js";

function TableHeading() {

  const setSortedField = () => {
    console.log("object");
  };

  return (
    <thead className="thead-dark">
      
        {/* <li > */}
          <tr >
            <th scope="col" className="datafeild">Photo</th>
            <th scope="col" className="datafeild" id="name" onClick={() => setSortedField('name')}>Name</th>
            {/* <th scope="col" className="datafeild">Name</th> */}
            <th scope="col" className="datafeild wide" id="email" onClick={() => setSortedField('email')}>Email</th>
            <th scope="col" className="datafeild">Phone </th>
            <th scope="col" className="datafeild">Date of Birth</th>
          </tr>
        {/* </li> */}
      
    </thead>
  );
}
export default TableHeading;
