import React, { createContext, useState } from "react";
import "./App.css"
import MyFirstForm from "./Components/MyFirstForm";
import ReducerAndState from "./Components/ReducerAndState";
import SimpleToDolist from "./Components/SimpleToDolist";
import TestRef from "./Components/TestRef";
import TestUseCAllBackHook from "./Components/TestUseCAllBackHook";
import ToDoList from "./Components/ToDoList";
import UseMemoExample from "./Components/UseMemoExample";
import WrapperComp from "./Components/WrapperComp";

export const AppContext = createContext();

const App = () => {

    const [name, setName] = useState("Ameer");
    const [points, setPoints] = useState([1,2,3,5,6,7])
    return <AppContext.Provider value={
      {
        name, 
        setName,
        points,
        setPoints
      }
    }  >
        {/* <WrapperComp /> */}
        {/* <ToDoList/> */}
        {/* <ReducerAndState /> */}
        {/* <MyFirstForm /> */}
        {/* <TestRef /> */}
        {/* <TestUseCAllBackHook /> */}
        {/* <UseMemoExample /> */}
        <SimpleToDolist />
    </AppContext.Provider>
}
   
// Passed the originalcomponent 
// export default EnhancedComponent(App);
export default App;