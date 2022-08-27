import { useReducer, useState } from "react";

const initialState = {
  toDoList: [
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
  ],
  user: {
    name: "",
    email: "",
    id: "",
    token: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, toDoList: [...state.toDoList, action.item] };
    case "complete":
      return {
        ...state,
        toDoList: state.toDoList.filter((item) => item.id !== action.id),
      };
    case "login":
      return { ...state, user: action.user };
    case "logout":
      return { ...state, user: {} };
    default:
      return state;
  }
};

const ReducerAndState = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  //   text-decoration: line-through;
  const [addedItem, setAddedItem] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  const handleChecked = (item) => {
    dispatch({ type: "complete", id: item.id });
  };

  const login = () => {

        dispatch({type:"login", user:{
            email,
            name,
            token
        }})
  };
  
  const logout = () => {
    dispatch({type:"logout"})
  };

  const addItem = () => {
    dispatch({
      type: "add",
      item: {
        id: "a" + Math.floor(Math.random() * 1300),
        text: addedItem,
        status: "progressing",
      },
    });
  };
  const {user, toDoList} = store;

  return (
    <div>
      <div>
        <input
          value={addedItem}
          onInput={(e) => setAddedItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>
      </div>
      email:<input type="email" value={email} onInput={(e)=>setEmail(e.target.value)} />
      name:<input  value={name} onInput={(e)=>setName(e.target.value)} />
      token: <input  value={token} onInput={(e)=>setToken(e.target.value)} />
      <button onClick={()=>login()} >Login</button>
      {user && user.token && <div>
        welcome {user.name}
        </div>}
      <button onClick={() => logout()} >Logout</button>

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

export default ReducerAndState;
