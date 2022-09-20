import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home/Home";
import Team from "./Components/Teams/Team";
import Teams from "./Components/Teams/Teams";
import AuthProvider from "./AuthProvider";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import Navigation from "./Components/Navigation";
import { Provider } from "react-redux";
import store from "./store/store"
import ReduxCounter from "./Components/ReduxCounter";
import ToDoList from "./Components/ToDoList";
import ToDoListWithRedux from "./Components/ToDoListWithRedux";
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from "./Components/Form/LoginForm/LoginForm";
export const AuthContext = createContext();
const App = () => {
  const [name, setName] = useState("Ameer");
  const [points, setPoints] = useState([1, 2, 3, 5, 6, 7]);
  return (
    <Provider store={store} >
      <div>
      <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="teams" element={<Teams />} />
        <Route path="teams/:teamId" element={<Team />} />
      </Routes>

    </Provider>
  );
};

// Passed the originalcomponent
// export default EnhancedComponent(App);
export default App;
