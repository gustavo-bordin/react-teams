import "./styles.css";

function SearchBar(props) {
  return (
    <div className="searchbar">
      <h1 className="title">{props.title}</h1>
      <input
        type="text"
        value={props.filter}
        placeholder={props.placeholder}
        onChange={props.callback}
      />
    </div>
  );
}

export default SearchBar;
