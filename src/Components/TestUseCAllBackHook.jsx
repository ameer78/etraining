



import { useState, useEffect, useRef, useCallback } from "react";
import SimpleToDolist from "./SimpleToDolist";

const TestUseCAllBackHook = () => {
const [countVal, setCountVal] = useState(0);
const [todoList, setToDoList] = useState([]);

const increment = () =>{ 
    setCountVal(parseInt(countVal) + 1)
}

const addToDo = useCallback(()=>{
    setToDoList([...todoList, "To do item"]);
}, [todoList])

  return (
    <div>
    <SimpleToDolist addToDo={addToDo} todoList={todoList}/>
      <h2>Count Value: {countVal}</h2>
      <button onClick={increment}>plus</button>
    </div>
  );
}

export default TestUseCAllBackHook;

