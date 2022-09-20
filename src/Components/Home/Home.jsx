import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useAuth } from "../../authhook";
import LoginForm from "../Form/LoginForm/LoginForm";
import RegistrationForm from "../Form/RegistrationForm/RegistrationForm";

const Home = () => {
  const [noAccount, setNoAccount] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Home Page</h1>
      {isLoggedIn ? (
        `Welcome ${user.email}`
      ) : (
        <div>
          {!noAccount? (
            <div>
              <LoginForm />
              <Button onClick={() => setNoAccount(true)} variant="link">
                Register
              </Button>
            </div>
          ) : (
            <RegistrationForm />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
