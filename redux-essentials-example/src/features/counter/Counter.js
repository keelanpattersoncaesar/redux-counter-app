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
  incrementIfEven,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('3');

  // Where is Number coming from?
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="items-center">
        <button
          className="flex flex-col items-center ..."
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className="flex flex-col items-center ..."
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <input
          className="w-20 border-solid border-2 border-sky-500 rounded-lg text-center ..."
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className= "w-60 border-solid border-2 border-sky-500 rounded-lg ..."
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className= "w-60 border-solid border-2 border-sky-500 rounded-lg ..."
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className= "w-60 border-solid border-2 border-sky-500 rounded-lg ..."
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button
          className= "w-60 border-solid border-2 border-sky-500 rounded-lg flex flex-col items-center ..."
          onClick={() => dispatch(incrementIfEven(incrementValue))}
        >
          Add If Even
        </button>
        <button
          className= "w-60 border-solid border-2 border-sky-500 flex flex-col items-center ..."
          onClick={() => dispatch(incrementBy5(incrementValue))}
        >
          Add 5
        </button>
        <button
          className= "w-60 border-solid border-2 border-sky-500 rounded-lg flex flex-col items-center ..."
          onClick={() => dispatch(decrementBy5(incrementValue))}
        >
          Subtract 5
        </button>
      </div> 
    </div>
  );
}
