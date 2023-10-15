// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

export default function Counter() {
  // const [hideCounter, setHideCounter] = useState(false);

  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: 'counter/toggle', showCounter: true });

    // const counterDiv = document.getElementById('counter');

    // counterDiv.style.display = showCounter ? 'block' : 'none';
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
