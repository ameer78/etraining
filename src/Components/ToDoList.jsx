import { useReducer, useState } from "react";

const initialToDos = [
    {
        id: "a1",
        text: "Task 1",
        status: "progressing",
    },
    {
        id: "a2",
        text: "Task 2",
        status: "progressing",
    },
    {
        id: "a3",
        text: "Task 3",
        status: "progressing",
    },
];

const reducer = (state, action) => {
    switch (action.type) {

        case "add":
            return [...state, action.item]

        case "complete":
            /*   return state.map((item) => {
                  if (item.id === action.id) {
                      return { ...item, status: "completed" };
                  } else {
                      return item;
                  }
              }); */
            return state.filter((item) => (item.id !== action.id))
        default:
            return state;
    }
};

const ToDoList = () => {
    const [toDoList, dispatch] = useReducer(reducer, initialToDos);
    //   text-decoration: line-through;

    const [addedItem, setAddedItem] = useState({});

    const handleChecked = (item) => {
        dispatch({ type: "complete", id: item.id });
    };

    const handleAddTodo = (item) => {
        dispatch({
            type: "add", item: {
                id: "a" + Math.floor(Math.random() * 1300),
                text: addedItem,
                status: "progressing"

            }
        });
    };


    return (

        <div>
            <label>
                <input
                    type="text"
                    value={addedItem}
                    onInput={(e) => setAddedItem(e.target.value)}
                />
                <button onClick={() => handleAddTodo()}>
                    Add
                </button>
            </label>


            {toDoList && toDoList.map((item) => (
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