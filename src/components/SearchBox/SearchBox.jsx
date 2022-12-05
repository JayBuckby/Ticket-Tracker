import "./SearchBox.scss";

const SearchBox = (props) => {
  const { searchTerm, role, handleInput } = props;

  return (
    <input
      className="searchbox"
      type="text"
      value={searchTerm}
      role={role}
      onInput={handleInput}
    />
  );
};

export default SearchBox;
