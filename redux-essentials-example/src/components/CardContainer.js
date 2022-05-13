import React from 'react'

const CardContainer = ({ string, text, url }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={url} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{string}</div>
        <p class="text-gray-700 text-base">
          {text}
        </p>
      </div>
    </div>
  )
}

export default CardContainer
