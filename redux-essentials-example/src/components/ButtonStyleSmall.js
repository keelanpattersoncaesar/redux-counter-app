import React from 'react'

const ButtonStyle = ({ text, click }) => {
  return (
    <button
      onClick={click}
      className="w-30 h-15 border-solid border-2 border-orange-300 rounded-md bg-white text-black shadow-lg p-2">
      {text}

    </button>
  )
}

export default ButtonStyle
