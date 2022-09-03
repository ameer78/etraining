import React, { createContext, useState } from "react";
import "./App.css";
import LoginForm from "./Components/Form/LoginForm/LoginForm";
import RegistrationForm from "./Components/Form/RegistrationForm/RegistrationForm";


export const AppContext = createContext();
const App = () => {
  const [name, setName] = useState("Ameer");
  const [points, setPoints] = useState([1, 2, 3, 5, 6, 7]);
  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        points,
        setPoints,
      }}
    >
      <div className="login-page">
       <RegistrationForm />
       <LoginForm />
      </div>
    </AppContext.Provider>
  );
};

// Passed the originalcomponent
// export default EnhancedComponent(App);
export default App;
