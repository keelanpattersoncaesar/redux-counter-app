import React, { useState } from 'react';
//useSelector allows you to extract data from the redux store state
//useDispatch is used to dispatch an action
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementB,
  incrementB,
  decrementBy5B,
  incrementBy5B,
  incrementByAmountB,
  incrementAsyncB,
  incrementIfOddB,
  incrementIfEvenB,
  selectCountB,
} from '../features/counter/counterSliceB';
import { incrementByAmountA, selectCountA } from '../features/counter/counterSlice';
import ButtonStyleRed from './ButtonStyleRed'
import ButtonStyleSmallRed from './ButtonStyleSmallRed';
import { FiMinusCircle } from 'react-icons/fi'
import { FiPlusCircle } from 'react-icons/fi'

export function CounterB() {
  const countB = useSelector(selectCountB);
  const countA = useSelector(selectCountA);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('0');

  // Where is Number coming from?
  const incrementValue = Number(incrementAmount) || 0;

  const addAmount = () => {
    dispatch(incrementByAmountB(incrementValue))
  }

  const addAsync = () => {
    dispatch(incrementAsyncB(incrementValue))
  }

  const addIfOdd = () => {
    dispatch(incrementIfOddB(incrementValue))
  }

  const addIfEven = () => {
    dispatch(incrementIfEvenB(incrementValue))
  }

  const add5 = () => {
    dispatch(incrementBy5B(incrementValue))
  }

  const subtract5 = () => {
    dispatch(decrementBy5B(incrementValue))
  }

  const addAmountToA = () => {
    dispatch(incrementByAmountA(incrementValue))
  }

  return (
    <div className="App bg-red-200 border-2 shadow-xl m-5 rounded-xl">
      <header className="App-header bg-transparent">
        <div style={{ height: 250, width: 250 }} className="shadow-lg border-8 border-red-400 rounded-full">
          <img style={{ height: "100%", width: "100%" }} src="https://i.ibb.co/YLjLRmC/cherry-logo-template-icon-vector-26980752-edited-edited.png" className="App-logo" alt="logo" />
        </div>
        <div className='bg-transparent rounded-lg p-2'>
          <input
            className="w-20 border-solid border-2 border-red-500 rounded-lg bg-red-200 shadow-lg shadow-red-500/50 text-center ..."
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <div className="flex flex-row items-center justify-center px-10">
            <FiMinusCircle
              aria-label="Decrement value"
              className="mx-10"
              onClick={() => dispatch(decrementB())}
            />
            <span>{countB}</span>
            <FiPlusCircle
              className="mx-10"
              aria-label="Increment value"
              onClick={() => dispatch(incrementB())}
            />
          </div>
          <div className="flex flex-col items-center space-y-3">
            <ButtonStyleRed className='border-solid border-2 border-red-300' text={"Add Amount"} click={addAmount} />
            <ButtonStyleRed text={"Add Async"} click={addAsync} />
            <div className="flex flex-row space-x-4">
              <ButtonStyleSmallRed text={"Add If Odd"} click={addIfOdd} />
              <ButtonStyleSmallRed text={"Add If Even"} click={addIfEven} />
            </div>
            <div className="flex flex-row space-x-4">
              <ButtonStyleSmallRed text={"Add 5"} click={add5} />
              <ButtonStyleSmallRed text={"Subtract 5"} click={subtract5} />
            </div>
            <ButtonStyleRed text={`Add Amount to A (${countA})`} click={addAmountToA} />
          </div>
        </div>
      </header>
    </div>
  );
}
