import team from "../../assets/data/data";
import SearchBox from "../SearchBox/SearchBox";
import Counter from "../Counter/Counter";

const UserTicket = () => {
  const userSearch = SearchBox.target.value;
  team.find((employee) => {
    if (userSearch === employee.name)
      return (
        <div>
          <p>{employee.name}</p>
          <p>{employee.role}</p>
          <Counter />
        </div>
      );
  });
};

export default UserTicket;
