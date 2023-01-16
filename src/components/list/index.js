import ListItem from "../listItem";
import "./styles.css";

function List(props) {
  return (
    <>
      <div className="list" data-testid="list">
        {props.items?.map((item) => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name ? item.name : item.displayName}
              root={props.root}
            />
          );
        })}
      </div>
    </>
  );
}

export default List;
