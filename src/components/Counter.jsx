import { useSelector, useDispatch } from 'react-redux';
import {
  counterIncrement,
  counterDecrement,
  counterIncrementByAmmount,
  counterToggle,
} from '../store/index';
import classes from './Counter.module.css';

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterToggle());
  };

  const toggleCounterIncrement = () => {
    dispatch(counterIncrement());
  };

  const toggleCounterIncrease = () => {
    const value = prompt('Add Value');
    const valueToNumber = parseInt(value);

    if (
      value !== null &&
      typeof valueToNumber === 'number' &&
      !isNaN(valueToNumber) &&
      valueToNumber > 0
    ) {
      dispatch(counterIncrementByAmmount(valueToNumber));
    }
  };

  const toggleCounterDecrement = () => {
    dispatch(counterDecrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={toggleCounterIncrement}>Increment</button>
        <button onClick={toggleCounterIncrease}>Dynamic Increment</button>
        <button onClick={toggleCounterDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
