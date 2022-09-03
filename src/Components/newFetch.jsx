import { useState } from "react";
import useFetch from "./useFetch";

const NewFetch = (props) => {
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState(1);
  const todoList = useFetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );

  const next = () => {
    setPage(page + 1);
  };
  const back = () => {
    setPage(page--);
  };

  //increase
  const increase = () => {
    setPage((page) => page + 1);
  };

  return (
    <>
      <button onClick={next}>next</button>
      <button onClick={back}>back</button>

      {/* <input value={page} onInput={(e) => setPage(e.target.value)} /> */}
      {todoList && todoList.map((item) => <div>{item.title}</div>)}
    </>
  );
};

export default NewFetch;
