import "./App.css";
<<<<<<< Updated upstream
=======
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Components/Routes/About";
import Contact from "./Components/Routes/Contact";
import Users from "./Components/Routes/Users";
import Home from "./Components/Routes/Home";
import User from "./Components/user";
>>>>>>> Stashed changes

import LoginForm from "./Components/LoginForm";
const App = () => {
  return (
    <div>
<<<<<<< Updated upstream
      {/*     <MyFirstForm /> */}
      {/* <UseMemoExample /> */}
      {/*  <NewFetch/> */}
      <LoginForm />
=======
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/users">Users</Link>
        </nav>
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userid" element={<User/>} />
        </Routes>
      </BrowserRouter>
>>>>>>> Stashed changes
    </div>
  );
};

// Passed the originalcomponent
// export default EnhancedComponent(App);
export default App;
