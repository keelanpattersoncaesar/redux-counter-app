import React from 'react'

const CardContainer = ({ string, text, url }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={url} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{string}</div>
        <p className="text-gray-700 text-base">
          {text}
        </p>
      </div>
    </div>
  )
}

export default CardContainer
