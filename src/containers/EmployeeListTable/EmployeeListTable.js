import React, { useState } from "react";
import "./style.css";
import TableHeading from "../../components/TableHeading/TableHeading";
import TableData from "../../components/TableData/TableData";

function EmployeeListTable(props) {
// Render table layout
  return (
    <table className="EmployeeListTable table">
      <TableHeading sortByFirstName={props.sortByFirstName} />
      <TableData results={props.results} />
    </table>
  );
}
export default EmployeeListTable;
