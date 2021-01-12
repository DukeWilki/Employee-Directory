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


// function EmployeeListTable() {
//   return (
//     <div className="container">
//       <table class="table">
//         <thead class="thead-dark">
//           <tr>
//             <th scope="col">Photo</th>
//             <th scope="col">Name</th>
//             <th scope="col">Phone </th>
//             <th scope="col">Email</th>
//             <th scope="col">DOB</th>
//           </tr>
//         </thead>
//       </table>
//     </div>
//     );
//   }
//   export default EmployeeListTable;
