import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";



function TableData() {
  const [employeeState, setEmployeeState] = useState([]);

 

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
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
    // <div className="centre"> 
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
    // </div>
  );
}
export default TableData;

// {
  /* <th scope="col">:)</th>
<th scope="col">Bob</th>
<th scope="col">123456789 </th>
<th scope="col">bob@bob.bob</th>
<th scope="col">1/1/11</th> */
// }
