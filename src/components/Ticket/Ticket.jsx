import Counter from "../Counter/Counter";
import "./Ticket.scss";

const Ticket = (props) => {
  const { name, role } = props;
  return (
    <div className="ticket__card">
      <p className="employee__info">{name}</p>
      <p className="employee__info">{role}</p>
      <Counter />
    </div>
  );
};

export default Ticket;
