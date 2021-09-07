import { navBarItems } from "../../constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery, setPage } from "../../store/photoSlice";
import "./index.css";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setQuery(""));
    dispatch(setPage("1"));
  };

  return (
    <nav className="navigation">
      <ul className="navigation__items">
        {navBarItems.map((item) => {
          const { name, link } = item;
          return (
            <Link to={link} key={name}>
              <li onClick={handleClick} className="navigation__item">
                {name}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
