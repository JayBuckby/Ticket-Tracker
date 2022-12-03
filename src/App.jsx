import "./App.scss";
import Tracker from "./components/Tracker/Tracker";
import team from "./assets/data/data";

const App = () => {
  const mappedTeam = team.map((employee) => {
    return <Tracker name={employee.name} role={employee.role} />;
  });
};

export default App;
