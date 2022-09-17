import { Link } from "react-router-dom";
import { useAuth } from "../authhook"
import "../App.css"
const Navigation = () => {
    const {token, handleLogout} = useAuth();
    return (
        <nav>
        <ul className="d-flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
          {token && <button onClick={handleLogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    )
}

export default Navigation;