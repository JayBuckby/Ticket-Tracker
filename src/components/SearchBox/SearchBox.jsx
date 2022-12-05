import "./SearchBox.scss";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <input
      className="searchbox"
      type="text"
      value={searchTerm}
      onInput={handleInput}
    />
  );
};

export default SearchBox;
