import { Link } from "react-router-dom";
import { useAuth } from "../authhook";
import Nav from "react-bootstrap/Nav";
import { logout } from "../slices/auth";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
const Navigation = () => {
  // const {token, handleLogout} = useAuth();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
 

  return (
    <Nav className="justify-content-center py-5" activeKey="/home">
      <Nav.Item className="m-3">
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item className="m-3">
        <Link to="/about">About</Link>
      </Nav.Item>
      <Nav.Item className="m-3">
        <Link to="/dashboard">Dashboard</Link>
      </Nav.Item>
      <Nav.Item className="m-3">
        <Link to="/contact">Contact</Link>
      </Nav.Item>
      <Nav.Item className="m-3">
        <Link to="/teams">Teams</Link>
      </Nav.Item>

      {isLoggedIn && (
        <Nav.Item className="m-3">
          <Button onClick={() =>  dispatch(logout())} variant="link">logout</Button>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default Navigation;
