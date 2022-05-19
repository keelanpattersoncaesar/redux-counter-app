import React from 'react'

const ButtonStyle = ({ text, click }) => {
  return (
    <button
      onClick={click}
      className="hover:bg-red-400 w-40 h-15 border-solid border-2 border-red-300 rounded-md bg-white text-black shadow-lg p-2">
      {text}

    </button>
  )
}

export default ButtonStyle
