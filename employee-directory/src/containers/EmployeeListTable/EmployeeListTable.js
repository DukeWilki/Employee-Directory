import React from "react";
import "./style.css";
// import API from "../../utils/API.js";
import TableHeading from "../../components/TableHeading/TableHeading";
import TableData from "../../components/TableData/TableData";



function EmployeeListTable() {
  return (
    <table className="EmployeeListTable table">
    <TableHeading />
    <TableData />
    </table>
  );
}
export default EmployeeListTable;


