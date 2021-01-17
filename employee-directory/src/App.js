import React, { useState, useEffect } from "react";
import "./App.css";
import EmployeeListHero from "./containers/EmployeeListHero/EmployeeListHero";
import EmployeeListSearch from "./containers/EmployeeListSearch/EmployeeListSearch";
import EmployeeListTable from "./containers/EmployeeListTable/EmployeeListTable";
import API from './utils/API';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

// Get employees via API
  const fetchEmployees = () => {
    API.getEmployee().then((res) => {
      setEmployees(res.data.results);
      setFilteredEmployees(res.data.results);
    });
  }

  useEffect(() => {
    fetchEmployees()
  }, []);

  // Filter by name function
  const filterByFirstName = (nameSeacrh) => {
    return employees.filter((employee) => {
      return employee.name.first.toLowerCase().includes(nameSeacrh.toLowerCase());
    })
  } 

  // Enable changes in the input field
  const changeInput = (e) => {
    setFilteredEmployees(filterByFirstName(e.target.value));   
  };

  // Sort by name function
  const sortByFirstName = (nameSort) => {
    const sortedEmployees =  [...filteredEmployees].sort((employeeOne, employeeTwo) => {
        if (employeeOne.name.first < employeeTwo.name.first ) {
          return -1;
        }
        if (employeeOne.name.first > employeeTwo.name.first) {
          return 1;
        }
        // a must be equal to b
        return 0;
    });
    setFilteredEmployees(sortedEmployees)
  } 

  // Render page
    return (
      <div className="App">
        <EmployeeListHero />
        <EmployeeListSearch inputState="" handleInputChange={changeInput} /> 
        <EmployeeListTable results={filteredEmployees} sortByFirstName={sortByFirstName} />
      </div>
    );
}

export default App;