import { navBarItems } from "../../constants";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__items">
        {navBarItems.map((item) => {
          const { name, link } = item;
          return (
            <Link to={link} key={name}>
              <li className="navigation__item">{name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
