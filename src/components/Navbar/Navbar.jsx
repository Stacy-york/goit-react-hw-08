import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function Navbar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/" style={{ marginRight: 10 }}>
        Home
      </NavLink>

      {isLoggedIn ? (
        <>
          <NavLink to="/contacts" style={{ marginRight: 10 }}>
            Contacts
          </NavLink>
          <span style={{ marginRight: 10 }}>Hello, {user.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login" style={{ marginRight: 10 }}>
            Login
          </NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </nav>
  );
}