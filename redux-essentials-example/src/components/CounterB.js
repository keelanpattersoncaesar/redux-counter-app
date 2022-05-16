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
import { FiPlusCircle } from 'react-icons/fi'

export function CounterB() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('0');

  // Where is Number coming from?
  const incrementValue = Number(incrementAmount) || 0;

  const addAmount = () => {
    dispatch(incrementByAmount(incrementValue))
  }

  return (
    <div className="App">
      <header className="App-header bg-transparent">
        <div style={{height: 250, width: 250}} className="shadow-lg border-2 border-red-400 rounded-full">
          <img style={{height: "100%", width:"100%"}} src="https://i.ibb.co/YLjLRmC/cherry-logo-template-icon-vector-26980752-edited-edited.png" className="App-logo" alt="logo" />
        </div>
    <div className="p-2">
        <input
          className="w-20 border-solid border-2 border-red-500 rounded-lg bg-red-200 shadow-lg shadow-red-500/50 text-center ..."
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
    <div className="items-center flex flex-row">
          <FiMinusCircle  
          aria-label="Decrement value"
          className="mx-auto ..." 
          onClick={() => dispatch(decrement())}
          />
        <span className={styles.value}>{count}</span>
        <FiPlusCircle 
          className="mx-auto ..."
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <ButtonStyle text={"Add Amount"} onClick={addAmount} />
        <ButtonStyle text={"Add Async"} onClick={() => dispatch(incrementAsync(incrementValue))} />
        <ButtonStyle text={"Add If Odd"} onClick={() => dispatch(incrementIfOdd(incrementValue))} />
        <ButtonStyle text={"Add If Even"} onClick={() => dispatch(incrementIfEven(incrementValue))} />
        <ButtonStyle text={"Add 5"} onClick={() => dispatch(incrementBy5(incrementValue))} />
        <ButtonStyle text={"Subtract 5"} onClick={() => dispatch(decrementBy5(incrementValue))} />
      </div> 
    </div>
    </header>
    </div>
  );
}
