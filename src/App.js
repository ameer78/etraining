import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home/Home";
import Team from "./Components/Teams/Team";
import Teams from "./Components/Teams/Teams";
import AuthProvider from "./AuthProvider";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

export const AuthContext = createContext(null);
const App = () => {
  const [name, setName] = useState("Ameer");
  const [points, setPoints] = useState([1, 2, 3, 5, 6, 7]);
  return (
    <AuthProvider>
      <div>
        <nav>
          <ul>
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
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        
       
         <Route path="dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute>} />
        
        <Route path="teams" element={<ProtectedRoute><Teams /></ProtectedRoute>} />
        <Route path="teams/:teamId" element={<ProtectedRoute><Team /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  );
};

// Passed the originalcomponent
// export default EnhancedComponent(App);
export default App;
