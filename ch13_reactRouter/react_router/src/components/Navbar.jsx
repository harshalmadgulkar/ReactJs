import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="nav">
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to=""
        >
          <h4>Home</h4>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to="about"
        >
          <h4>About</h4>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to="items"
        >
          <h4>Items</h4>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
