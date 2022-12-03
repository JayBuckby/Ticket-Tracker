import Counter from "../Counter/Counter";
import "./Tracker.scss";

const Tracker = (props) => {
  const { name, role } = props;
  return (
    <div className="tracker__card">
      <p className="employee__info">{name}</p>
      <p className="employee__info">{role}</p>
      <Counter />
    </div>
  );
};

export default Tracker;
