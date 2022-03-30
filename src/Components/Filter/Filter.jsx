import React, { useEffect, useState } from 'react';
import { BsFillFilterSquareFill } from "react-icons/bs";

export default function Filter(props) {

  const startSearch = (e) => {
    setTimeout(() => {
      props.startSearch(e.target.value);
    }, 1000);
  }
  

  return (
    <section className="py-[15px] flex sm:flex-row flex-col justify-center items-center">
      <label className='opacity-50' htmlFor="search">Type something</label>
      <input 
      className='border-2 rounded sm:mx-[10px] mx-0 sm:my-0 my-[10px] py-[5px] px-[10px] focus:outline-black' 
      type="text" 
      name="search"
      onChange={startSearch}
      />
      <a href="#"><BsFillFilterSquareFill className='h-[38px] w-[38px] opacity-50 hover:opacity-100 hover:ease-in-out duration-200'/></a>
    </section>
  )
}
