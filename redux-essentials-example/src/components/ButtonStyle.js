import React from 'react'
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
import {
    dispatch
} from './CounterA'

const ButtonStyle = ({text, click}) => {
  return (
    <button 
        onClick={click}
        className="w-60 border-solid border-2 border-orange-300 rounded-md bg-white text-black shadow-lg">
        {text}
        
    </button>
  )
}

export default ButtonStyle