import { NavLink } from "react-router-dom";

const Navigation: any = () => {
  const isLoggedIn = null;
  return (
    <header>
      <nav>
        <NavLink to={"/teachers"}>Teachers</NavLink>
        <NavLink to={"/"}>Home</NavLink>
        {isLoggedIn && <NavLink to={"/favorites"}>Favorites</NavLink>}
      </nav>
      <div>
        <button type="button">Log In</button>
        <button type="button">Registration</button>
      </div>
    </header>
  );
};
export default Navigation;
