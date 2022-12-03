import "./App.scss";
import Tracker from "./components/Tracker/Tracker";
import team from "./assets/data/data";

const App = () => {
  const mappedTeam = team.map((employee) => {
    return <Tracker name={employee.name} role={employee.role} />;
  });

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <div className="ticket-tracker">{mappedTeam}</div>
      </header>
    </div>
  );
};

export default App;
