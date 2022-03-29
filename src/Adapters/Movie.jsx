import React, { useEffect } from 'react'


export default function Meals(props) {
const {title, image} = props;

  return (
    <div className="movie text-center">
      <figure className='w-[300px] relative'>
        <img className='relative object-cover	min-w-full min-h-full' src={image} alt="" />
      </figure>
      <p>{title}</p>
    </div>
  )
}
