import { NavLink, Link } from "react-router";
import "../index.css"

function Header() {
  return (
    <nav>
      {/* NavLink makes it easy to show active states */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
       >
        Home
      </NavLink>
      <NavLink to="/about" >
        about
      </NavLink>
      <NavLink to="/contact" >
        contact
      </NavLink>

      <Link to="/concerts/salt-lake-city">Concerts</Link>
    </nav>
  );
}

export default Header;