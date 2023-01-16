import { Link } from "react-router-dom";
import Centralizer from "../centralizer";
import "./styles.css";

function NavBar() {
  return (
    <nav>
      <Centralizer>
        <ul>
          <Link className="text-link" to="/" data-testid="link-logo">
            <img
              className="logo"
              alt="Tempo Logo Full 512px"
              src="https://www.tempo.io/hubfs/Imported%20images/Tempo%20Logo%20Full%20512px-1.svg"
            />
          </Link>
        </ul>
      </Centralizer>
    </nav>
  );
}

export default NavBar;
