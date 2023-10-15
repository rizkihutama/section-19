import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

export default function Counter() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    console.log(counter);
  };

  const toggleCounterIncrement = () => {
    dispatch({ type: 'counter/incremented' });
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
      dispatch({ type: 'counter/increase', amount: valueToNumber });
    }
  };

  const toggleCounterDecrement = () => {
    dispatch({ type: 'counter/decremented' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={toggleCounterIncrement}>Increment</button>
        <button onClick={toggleCounterIncrease}>Dynamic Increment</button>
        <button onClick={toggleCounterDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
