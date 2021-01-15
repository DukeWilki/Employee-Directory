import React from "react";
import "./style.css";
// import API from "../../utils/API.js";
import TableHeading from "../../components/TableHeading/TableHeading";
import TableData from "../../components/TableData/TableData";



function EmployeeListTable() {


  const setSortedField = () => {
    console.log("object");
  };


  return (
    <table className="EmployeeListTable table">
    <TableHeading onClick="" onClick={setSortedField}/>
    <TableData />
    </table>
  );
}
export default EmployeeListTable;


