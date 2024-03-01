import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorite_movies">Favorite Movies</NavLink>
      <NavLink to="/add_movies">Add New Movies</NavLink>
      <NavLink to="/suggestions">Suggestions!</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  )
}

export default NavBar;