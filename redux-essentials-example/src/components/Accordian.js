import React, { useState } from 'react'

const Accordian = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    return (
      setOpen(open === true)
    )
  }

  return (

    <div className='h-auto w-1/2 border-2 border-rd shadow-md m-4 p-4'>
      <h1>Title</h1>
      <button onClick={() => setOpen(openModal())}>Button</button>
      <h1>hello there!</h1>
    </div>
  )
}





export default Accordian;
