import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";



function TableData() {
  const [employeeState, setEmployeeState] = useState([]);
  const inputState = useState();
  console.log("state: ");
  console.log(inputState);  

  useEffect(() => {
    API.getEmployee().then((res) => {
      setEmployeeState(res.data.results);
      console.log("Emp State:");
      console.log(res.data.results);
    });
  }, []);

  function parseDate(birthdate) {
    const date = new Date(birthdate);
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  }

  return (
    <tbody class="tbody-dark">
      <ul className="list-group search-results ">
        {employeeState.map((result) => (
          <li key={result} className="list-group-item">
            <tr key={result}>
            <td className="datafeild"><img alt="profile" src={result.picture.medium} /></td>
            <td className="datafeild">{result.name.first} {result.name.last}</td>
            <td className="datafeild wide">{result.email}</td>
            <td className="datafeild">{result.phone}</td>
            <td className="datafeild">{ parseDate(result.dob.date) }</td>
            </tr>
          </li> 
        ))}
      </ul>
    </tbody>
  );
}
export default TableData;


