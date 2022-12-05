import "./App.scss";
import Ticket from "./components/Ticket/Ticket";
import team from "./assets/data/data";
import SearchBox from "./components/SearchBox/SearchBox";
import UserTicket from "./components/UserTicket/UserTicket";

const App = () => {
  const mappedTeam = team.map((employee) => {
    return <Ticket name={employee.name} role={employee.role} />;
  });

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <div className="ticket-tracker">{mappedTeam}</div>
      </header>
      <div>
        <h2>Search by employee name</h2>
        <SearchBox />
        {/* <UserTicket /> */}
      </div>
    </div>
  );
};

export default App;
