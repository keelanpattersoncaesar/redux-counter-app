import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  decrementBy5,
  incrementBy5,
  incrementByAmountA,
  incrementAsync,
  incrementIfOdd,
  incrementIfEven,
  selectCountA,
} from "../features/counter/counterSlice";
import {
  incrementByAmountB,
  selectCountB,
} from "../features/counter/counterSliceB";
import ButtonStyle from "./ButtonStyle";
import ButtonStyleSmall from "./ButtonStyleSmall";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import FreshOrange from "../assets/freshorange.png";

export function CounterA() {
  const countA = useSelector(selectCountA);
  const countB = useSelector(selectCountB);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("0");

  const incrementValue = Number(incrementAmount) || 0;

  const addAmount = () => {
    dispatch(incrementByAmountA(incrementValue));
  };

  const addAsync = () => {
    dispatch(incrementAsync(incrementValue));
  };

  const addIfOdd = () => {
    dispatch(incrementIfOdd(incrementValue));
  };

  const addIfEven = () => {
    dispatch(incrementIfEven(incrementValue));
  };

  const add5 = () => {
    dispatch(incrementBy5(incrementValue));
  };

  const subtract5 = () => {
    dispatch(decrementBy5(incrementValue));
  };

  const addAmountToB = () => {
    dispatch(incrementByAmountB(incrementValue));
  };

  return (
    <div className="App bg-orange-200 border-2 shadow-xl m-5 rounded-xl">
      <header className="App-header bg-transparent">
        <div
          style={{ height: 250, width: 250 }}
          className="shadow-lg border-8 border-orange-400 rounded-full"
        >
          <img
            style={{ height: "100%", width: "100%" }}
            src={FreshOrange}
            className="App-logo"
            alt="logo"
          />
        </div>
        <div className="bg-transparent rounded-lg p-2">
          <input
            className="w-20 border-solid border-2 border-orange-500 rounded-lg bg-orange-200 shadow-lg shadow-orange-500/50 text-center ..."
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <div className="flex flex-row items-center justify-center px-10">
            <FiMinusCircle
              aria-label="Decrement value"
              className="mx-10"
              onClick={() => dispatch(decrement())}
            />
            <span>{countA}</span>
            <FiPlusCircle
              className="mx-10"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            />
          </div>
          <div className="flex flex-col items-center space-y-3">
            <ButtonStyle text={"Add Amount"} click={addAmount} />
            <ButtonStyle text={"Add Async"} click={addAsync} />
            <div className="flex flex-row space-x-4">
              <ButtonStyleSmall text={"Add If Odd"} click={addIfOdd} />
              <ButtonStyleSmall text={"Add If Even"} click={addIfEven} />
            </div>
            <div className="flex flex-row space-x-4">
              <ButtonStyleSmall text={"Add 5"} click={add5} />
              <ButtonStyleSmall text={"Subtract 5"} click={subtract5} />
            </div>
            <ButtonStyle
              text={`Add Amount to B (${countB})`}
              click={addAmountToB}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
