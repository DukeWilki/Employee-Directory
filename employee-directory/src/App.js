// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import EmployeeListHero from "./containers/EmployeeListHero/EmployeeListHero";
import EmployeeListSearch from "./containers/EmployeeListSearch/EmployeeListSearch";
import EmployeeListTable from "./containers/EmployeeListTable/EmployeeListTable";
import TableData from "./components/TableData/TableData";
import Test from "./containers/Test/Test";
import API from './utils/API';

//rename your onChange prop to handleInputChange -done
//create a state which contains the current search text -done
//pass the search text into EmployeeListTable and also EmployeeListSearch 
//In your table, implement the logic for searching the user 
function App() {
  // const [inputState, setinputState] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);



  const fetchEmployees = () => {
    API.getEmployee().then((res) => {
      setEmployees(res.data.results);
      setFilteredEmployees(res.data.results);
      // console.log("Emp State:");
      // console.log(res.data.results);
    });
  }

  useEffect(() => {
    fetchEmployees()
  }, []);

  const filterByFirstName = (name) => {
    return employees.filter((employee) => {

      return employee.name.first.toLowerCase().includes(name.toLowerCase());

    })
  } 

  const changeInput = (e) => {
    // setinputState(e.target.value)
    // console.log(inputState);

    setFilteredEmployees(filterByFirstName(e.target.value));

    
  };

    return (
      
      <div className="App">
        <EmployeeListHero />
        <EmployeeListSearch inputState="" handleInputChange={changeInput} /> 
        {/* props in the above line */}

        {/* <Test /> */}
        <EmployeeListTable results={filteredEmployees}/>
        {/* <TableData results={inputState}/> */}
      </div>
    );
  
}

export default App;
