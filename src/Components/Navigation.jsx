import { Link } from "react-router-dom";
import { useAuth } from "../authhook";
import Nav from "react-bootstrap/Nav";

import "../App.css";
import { useSelector } from "react-redux";
const Navigation = () => {
  // const {token, handleLogout} = useAuth();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);
  return (
    <Nav className="justify-content-center py-5" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/teams">Teams</Nav.Link>
      </Nav.Item>
      
      {isLoggedIn && <Nav.Item>
         <Nav.Link href="/">logout</Nav.Link>
      </Nav.Item>}
    </Nav>
  );
};

export default Navigation;
