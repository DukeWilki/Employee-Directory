import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import EmployeeListHero from "./containers/EmployeeListHero/EmployeeListHero";
import EmployeeListSearch from "./containers/EmployeeListSearch/EmployeeListSearch";
import EmployeeListTable from "./containers/EmployeeListTable/EmployeeListTable";
import Test from "./containers/Test/Test";

//rename your onChange prop to handleInputChange - done
//create a state which contains the current search text  - done
//pass the search text into EmployeeListTable and also EmployeeListSearch 
//In your table, implement the logic for searching the user 
function App() {
  const [inputState, setinputState] = useState([]);
  // return <EmployeeListHero /> ;

  const changeInput = () => {
    // this.setState(props => ({ props: !state.isShow }));
    // this.setSearch(EmployeeListSearch.props);
  };


    return (
      
      <div className="App">
        <EmployeeListHero />
        <EmployeeListSearch handleInputChange="" handleInputChange={changeInput}/> 
        
        {/* props in the above line */}
        <Test />
        <EmployeeListTable />
      </div>
    );
  
}

export default App;
