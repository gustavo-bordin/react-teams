import "./styles.css";

function Centralizer(props) {
  return (
    <div className="container">
      <div className="centralizer">{props.children}</div>
    </div>
  );
}

export default Centralizer;
