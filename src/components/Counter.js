import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const incrementHandler = (amount = 1) => {
    dispatch({ type: "increment", amount: amount });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={() => incrementHandler(5)}>Increase by 5</button>
        <button onClick={() => incrementHandler(1)}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
