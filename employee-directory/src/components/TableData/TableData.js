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
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
  }

  return (
    <tbody class="tbody-dark">
      <ul className="list-group search-results">
        {employeeState.map((result) => (
          <li key={result} className="list-group-item">
            {/* <img alt="Dog" src={result} className="img-fluid" /> */}
            {/* <p>res.data.results</p> */}
            <tr key={result}>
            <td className="photo"><img alt="profile" src={result.picture.thumbnail} /></td>
            <td className="photo">{result.name.first} {result.name.last}</td>
            <td className="photo">{result.phone}</td>
            <td className="photo">{result.email}</td>
            <td className="photo">{ parseDate(result.dob.date) }</td>
            </tr>
          </li> 
        ))}
      </ul>
    </tbody>
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
