import { useSelector } from "react-redux";
import { useAuth } from "../../authhook";
import LoginForm from "../Form/LoginForm/LoginForm";

const Home = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  return (
    <div>
    <h1>Home Page</h1>
    {isLoggedIn ? `Welcome ${user.email}` : <LoginForm />}
    </div>
  );
};

export default Home;
