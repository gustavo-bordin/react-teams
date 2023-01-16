import { Link } from "react-router-dom";
import "./styles.css";

function ListItem(props) {
  return (
    <Link
      data-testid="list-item"
      className="list-item"
      to={`/${props.root}/${props.id}`}
    >
      <div className="list-item-title">
        <h1>{props.name}</h1>
        <h2>{props.id}</h2>
      </div>
    </Link>
  );
}

export default ListItem;
