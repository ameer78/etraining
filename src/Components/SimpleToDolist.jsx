



import { useState, useEffect, useRef } from "react";

const SimpleToDolist = (props) => {
const {addToDo, todoList} = props
useEffect(()=>{
    console.log("rendered")
},[addToDo])

  return (
    <>
    {todoList && todoList.map(item => <div>item</div>)}
    <button onClick={addToDo}> add to do</button>
    </>
  );
}

export default SimpleToDolist;

