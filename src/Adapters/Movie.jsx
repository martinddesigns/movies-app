import React from 'react';


export default function Meals(props) {
const {title, image, rank} = props;

  return (
    <div className={`text-center relative mx-auto md:mx-0 max-w-[200px] md:max-w-none`}>
      <span className='absolute top-0 left-0 z-[2] bg-indigo-500 w-[30px] h-[30px] text-white rounded'>{rank}</span>
      <figure className={`rounded overflow-hidden md:w-full w-[200px] relative mb-[10px]`}>
        <img className='relative object-cover	min-w-full min-h-full' src={image} alt="" />
      </figure>
      <p className='text-[16px]'>{title}</p>
    </div>
  )
}
