



import { useState, useEffect, useRef } from "react";
import useFetch from "./useFetch";

const SimpleToDolist = (props) => {
  const [limit,  setLimit] = useState("10");
  const [search,  setSearch] = useState("");
  const [page,  setPage] = useState("1");
  const [list, setList] = useState([])
  let todoList = useFetch(`https://reqres.in/api/users?page=${page}`)

 
  useEffect(()=>{
    setList(todoList);
  },[todoList])
  
  useEffect(()=>{
    setList(todoList.filter(item => item.first_name.includes(search)));
  },[search])

  return (
    <>
    <input value={page} onInput={(e) => setPage(e.target.value)} />
    <input value={search} onInput={(e) => setSearch(e.target.value)} />
    {list && list.map(item => <div>{item.id} and {item.first_name}</div>)}
    </>
  );
}

export default SimpleToDolist;

