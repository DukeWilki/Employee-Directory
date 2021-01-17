import React, { useState } from "react";
import "./style.css";
// import API from "../../utils/API.js";
import TableHeading from "../../components/TableHeading/TableHeading";
import TableData from "../../components/TableData/TableData";
import App from "../../App";



function EmployeeListTable(props) {
  

  console.log('props:', props.results)

  // const setSortedField = () => {
  //   console.log("object");
  // };



//   handleSort = event => {
//     event.preventDefault();

//     // Sort table by employee name in ascending order
//     this.setState(
//         {
//             displayRows: this.state.displayRows.sort((rowA, rowB) => {
//                 // This comparison logic adapted from example found at:
//                 // https://www.w3schools.com/js/js_array_sort.asp

//                 const nameA = rowA.name.toLowerCase();
//                 const nameB = rowB.name.toLowerCase();
//                 if (nameA < nameB) return -1;
//                 if (nameA > nameB) return 1;
//                 return 0;
//             })
//         }
//     );
// }

  return (
    <table className="EmployeeListTable table">
      <TableHeading />
      {/* <TableHeading onClick="" onClick={setSortedField}/> */}
    {/* <TableHeading onClick="" onClick={() => {context.handleSort(name.toLowerCase()) }}/> */}
    <TableData results={props.results}/>
    </table>
  );
}
export default EmployeeListTable;


