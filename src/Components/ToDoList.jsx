import { useReducer } from "react";

const initialToDos = [
  {
    id: "a1",
    text: "Task 1",
    status: "progressing",
  },
  {
    id: "a2",
    text: "Task 1",
    status: "progressing",
  },
  {
    id: "a3",
    text: "Task 1",
    status: "progressing",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "complete":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, status: "completed" };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

const ToDoList = () => {
  const [toDoList, dispatch] = useReducer(reducer, initialToDos);
  //   text-decoration: line-through;
  const handleChecked = (item) => {
    dispatch({ type: "complete", id: item.id });
  };

  return (
    <div>
      {toDoList &&
        toDoList.map((item) => (
          <div key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.status === "completed"}
                onChange={() => handleChecked(item)}
              />
              {item.text}
            </label>
          </div>
        ))}
    </div>
  );
};

export default ToDoList;