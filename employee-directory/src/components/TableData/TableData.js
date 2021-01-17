import React from "react";
import "./style.css";

  
function TableData(props) {
  // Format date in DD/MM/YYYY format 
  function parseDate(birthdate) {
    const date = new Date(birthdate);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  // Populate/render data
  return (
    <tbody className="tbody-dark">
      {props.results.map((result) => (
        <tr key={result.login.uuid} className="search-results ">
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
       </tr>
      ))}
    </tbody>
  );
}
export default TableData;
