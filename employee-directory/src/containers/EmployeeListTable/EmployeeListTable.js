import React, { useState } from "react";
import "./style.css";
// import API from "../../utils/API.js";
import TableHeading from "../../components/TableHeading/TableHeading";
import TableData from "../../components/TableData/TableData";
import App from "../../App";

function EmployeeListTable(props) {
  console.log("props:", props.results);

  // const setSortedField = () => {
  //   console.log("object");
  // };

  return (
    <table className="EmployeeListTable table">
      <TableHeading sortByFirstName={props.sortByFirstName} />
      {/* <TableHeading onClick="" onClick={setSortedField}/> */}
      {/* <TableHeading onClick="" onClick={() => {context.handleSort(name.toLowerCase()) }}/> */}
      <TableData results={props.results} />
    </table>
  );
}
export default EmployeeListTable;
