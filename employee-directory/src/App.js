import logo from "./logo.svg";
import "./App.css";
import EmployeeListHero from "./containers/EmployeeListHero/EmployeeListHero";
import EmployeeListSearch from "./containers/EmployeeListSearch/EmployeeListSearch";
import EmployeeListTable from "./containers/EmployeeListTable/EmployeeListTable";

function App() {
  // return <EmployeeListHero /> ;

    return (
      
      <div className="App">
        <EmployeeListHero />
        <EmployeeListSearch />
        <EmployeeListTable />
      </div>
    );
  
}

export default App;
