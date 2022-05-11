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
} from '../features/counter/counterSlice';
import ButtonStyle from './ButtonStyle'
import styles from './Counter.module.css';
import { FiMinusCircle } from 'react-icons/fi'
import { BsPlusCircle } from 'react-icons/bs'

export function CounterA() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('5');

  // Where is Number coming from?
  const incrementValue = Number(incrementAmount) || 0;

  const addAmount = () => {
    dispatch(incrementByAmount(incrementValue))
  }

  

  return (
    <div className='bg-orange-300 rounded-lg '>
      <div className="items-center">
        <BsPlusCircle 
          className="mx-auto flex flex-col ..."
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        />
        <span className={styles.value}>{count}</span>
          <FiMinusCircle  
          aria-label="Decrement value"
          className="mx-auto flex flex-col ..." 
          onClick={() => dispatch(decrement())}
          />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <input
          className="w-20 border-solid border-2 border-orange-500 rounded-lg bg-orange-200 shadow-lg shadow-orange-500/50 text-center ..."
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <ButtonStyle text={"Add Amount"} click={addAmount} />
        <ButtonStyle text={"Add Async"} onClick={() => dispatch(incrementAsync(incrementValue))} />
        <ButtonStyle text={"Add If Odd"} onClick={() => dispatch(incrementIfOdd(incrementValue))} />
        <ButtonStyle text={"Add If Even"} onClick={() => dispatch(incrementIfEven(incrementValue))} />
        <ButtonStyle text={"Add 5"} onClick={() => dispatch(incrementBy5(incrementValue))} />
        <ButtonStyle text={"Subtract 5"} onClick={() => dispatch(decrementBy5(incrementValue))} />
      </div> 
    </div>
  );
}
