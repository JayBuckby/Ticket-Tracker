import "./App.scss";
import { useState } from "react";
import Ticket from "./components/Ticket/Ticket";
import team from "./assets/data/data";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  //If searchTerm is true, then render the tickets that match ELSE render all of the tickets

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
  console.log(filteredEmployee);

  const filteredEmployeeJSX = filteredEmployee.map((employee) => (
    <Ticket name={employee.name} role={employee.role} />
  ));

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <div className="ticket-tracker">
          {searchTerm.length > 0 ? filteredEmployeeJSX : mappedTeam}
          {/* if the length of the sting SearchTerm has a value greater than 0. Render(?) the filteredEmployeeJSX else(:) render the mappedTeam */}
        </div>
      </header>
      <div>
        <h2>Search by employee name</h2>
        <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      </div>
    </div>
  );
};

export default App;

// {<div className="searched-user">{filteredUsers}</div>}
// const [searchTerm, setSearchTerm] = useState("");

//   const handleInput = (event) => {
//     const userSearch = event.target.value.toLowerCase();
//     setSearchTerm(userSearch);
//   };

//   const filteredEmployee = team.filter((employee) => {
//     const employeeLowerCase = employee.name.toLowerCase();
//     return employeeLowerCase.includes(searchTerm);
//   });
//   Filter takes a condition, true added to new array, false nothing happens.
//   IF searchterm of the user = employee object.name then add to the array
//   return the array.
//   Once array is back, map over the data and make component.
//   const filteredUsers = team.filter((employee) => {

//     return ( team.map()
//       <Ticket
//         name={employee.name.toLowerCase()}
//         role={employee.role.toLowerCase()}
//       />
//     );
//   });
//   console.log(filteredUsers);

{
  /* searchTerm={searchTerm} handleInput={handleInput} */
}
