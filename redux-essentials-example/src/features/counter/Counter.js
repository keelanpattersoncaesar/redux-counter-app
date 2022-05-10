import React, { useState } from 'react';
//useSelector allows you to extract data from the redux store state
//useDispatch is used to dispatch an action
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  decrementBy5,
  incrementBy5,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  // Where is Number coming from?
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.column}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.column}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementBy5(incrementValue))}
        >
          Add 5
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementBy5(incrementValue))}
        >
          Subtract 5
        </button>
      </div>
    </div>
  );
}
