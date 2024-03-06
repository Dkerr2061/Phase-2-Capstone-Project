import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="nav-bar">
    <nav>
      <NavLink to="/" className="nav-button">Home</NavLink>
      <NavLink to="/favorite_movies" className="nav-button">Favorite Movies</NavLink>
      <NavLink to="/add_movies" className="nav-button">Add New Movies</NavLink>
    </nav>
  </div>
  )
}

export default NavBar;