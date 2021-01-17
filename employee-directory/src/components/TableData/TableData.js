import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import App from "../../App";


function TableData(props) {
  
  // const [inputState, props] = useState([]);
  // console.log('props:', props.input)
  console.log('props:', props.results)

  // const [inputState, setinputState] = useState();
  // useEffect(() => {
  //   App.getInput().then((props) => {
  //     setinputState(props.data);
  // console.log("Input state: ");
  // console.log(props.data);  
  //   });
  // }, []);

  const [employeeState, setEmployeeState] = useState([]);
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
      <h2>input: {props.inputState}</h2>
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


