import React from 'react'
import { CounterA } from '../components/CounterA';
import { CounterB } from '../components/CounterB';

const CounterView = () => {
  return (
    <div className='bg-gradient-to-r from-orange-200 to-red-300 flex w-full justify-around font-Roboto text-center'>
        <div><CounterA /></div>
        <div><CounterB /></div>
    </div>
  )
}

export default CounterView