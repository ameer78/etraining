



import { useState, useEffect, useRef } from "react";
import useFetch from "./useFetch";

const SimpleToDolist = (props) => {
  const [limit,  setLimit] = useState("10");
  const [page,  setPage] = useState("1");
  const todoList = useFetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)

  return (
    <>
    <input value={page} onInput={(e) => setPage(e.target.value)} />
    {todoList && todoList.map(item => <div>{item.title}</div>)}
    </>
  );
}

export default SimpleToDolist;

