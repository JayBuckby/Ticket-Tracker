import "./App.scss";
import { useState } from "react";
import Ticket from "./components/Ticket/Ticket";
import team from "./assets/data/data";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    const userSearch = event.target.value.toLowerCase();
    setSearchTerm(userSearch);
  };

  const mappedTeam = team.map((employee) => {
    return <Ticket name={employee.name} role={employee.role} />;
  });

  //Create a variable that filters out the team data for employees that are in the searchTerm

  const filteredEmployee = team.filter((employee) => {
    const employeeLowerCase = employee.name.toLowerCase();
    return employeeLowerCase.includes(searchTerm);
  });

  const employeeSearch = filteredEmployee.map((employee) => (
    <Ticket name={employee.name} role={employee.role} />
  ));

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <div>
          <h2>Search by employee name</h2>
          <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
        </div>
        <div className="ticket-tracker">
          {searchTerm.length > 0 ? employeeSearch : mappedTeam}
          {/* if the length of the sting SearchTerm has a value greater than 0. Render(?) the filteredEmployeeJSX else(:) render the mappedTeam */}
        </div>
      </header>
    </div>
  );
};

export default App;
