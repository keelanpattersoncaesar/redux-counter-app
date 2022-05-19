import React from 'react'

const CardContainer = ({ string, text, url }) => {
  return (
    <div className="flex justify-around border-2 border-white-100 max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-10 py-4">
        <div className="font-bold text-xl mb-2">{string}</div>
        <p className="text-gray-700 text-base">
          {text}
        </p>
      </div>
    </div>
  )
}

export default CardContainer
