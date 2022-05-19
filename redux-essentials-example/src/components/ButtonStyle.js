import React from 'react'

const ButtonStyle = ({ text, click }) => {
  return (
    <button
      onClick={click}
      className="w-full h-15 p-2 border-solid border-2 border-orange-300 rounded-md bg-white text-black shadow-lg">
      {text}
    </button>
  )
}

export default ButtonStyle
