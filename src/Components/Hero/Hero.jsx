import React from 'react'

export default function Hero({title}) {
  return (
    <div className={`lg:h-[300px] h:[150px] flex items-center justify-center bg-gradient-to-b from-indigo-500 to-indigo-400`}>
      <h1 className="hero__title font-bold text-white">{title}</h1>
    </div>
  )
}


