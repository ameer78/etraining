import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../slices/counterSlice";
const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter :</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement </button>
      <input value={amount} type="number" onChange={(e) => setAmount(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(incrementByAmount(amount))}>increment by amount </button>
    </div>
  );
};
export default ReduxCounter;
