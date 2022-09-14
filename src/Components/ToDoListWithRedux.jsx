import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, updateToDo, deleteTodo } from "../slices/todoSlice";
import Table from "react-bootstrap/Table";
const ToDoListWithRedux = () => {
  const [addedItem, setAddedItem] = useState("");
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.todo.todoList);

  return (
    <div>
      <input
        type="text"
        value={addedItem}
        onInput={(e) => setAddedItem(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(
            addToDo({
              id: "a" + Math.floor(Math.random() * 1300),
              name: addedItem,
              status: "new",
            })
          )
        }
      >
        Add
      </button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {toDoList &&
            toDoList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ToDoListWithRedux;
