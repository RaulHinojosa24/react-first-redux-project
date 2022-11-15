import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const decrementHandler = (amount = 1) => {
    dispatch(counterActions.decrement(amount));
  };

  const incrementHandler = (amount = 1) => {
    dispatch(counterActions.increment(amount));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
        <button onClick={() => incrementHandler(5)}>Increase by 5</button>
        <button onClick={() => incrementHandler(1)}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
