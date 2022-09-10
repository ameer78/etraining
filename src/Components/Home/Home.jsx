import { useAuth } from "../../authhook";

const Home = () => {
  const {token, handleLogin, handleLogout } = useAuth();
  return (
    <div>
    {token && <button onClick={() => handleLogout()}>Logout</button>}
    {!token && <button onClick={() => handleLogin()}>Login</button>}
    
    <h1>Home Page</h1>
    </div>
  );
};

export default Home;
