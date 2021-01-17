import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import App from "../../App";

function TableData(props) {
  console.log("props:", props.results);



  // function handleFliter(props.results) {}

  // const handleSort = (name) => {
  //   console.log("hellolololo");
  //   if (employeeState.order === "descend") {
  //     setEmployeeState({
  //       order: "ascend",
  //     });
  //   } else {
  //     setEmployeeState({
  //       order: "descend",
  //     });
  //   }
  // };

  function parseDate(birthdate) {
    const date = new Date(birthdate);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  return (
    <tbody className="tbody-dark">
      {props.results.map((result) => (
        <tr key={result.login.uuid} className="search-results ">
          
            {/* <tr onClick={handleSort} key={result} > */}
            {/* <tr > */}
            <td className="datafeild">
              <img alt="profile" src={result.picture.medium} />
            </td>
            <td className="datafeild" id="namedata">
              {result.name.first} {result.name.last}
            </td>
            <td className="datafeild wide" id="emaildata">
              {result.email}
            </td>
            <td className="datafeild">{result.phone}</td>
            <td className="datafeild">{parseDate(result.dob.date)}</td>
            {/* </tr> */}
          
        </tr>
      ))}
    </tbody>
  );
}
export default TableData;
