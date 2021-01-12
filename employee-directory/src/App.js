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
  
  
  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
                  <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reactgwerwergh
          </a>
        </header>
      </div>
    );
  
}

export default App;
