import React, { useState } from 'react';

export default function Filter(props) {

  const startSearch = (e) => {
      props.changeLoader(true);
    setTimeout(() => {
      props.changeLoader(false);
      props.startSearch(e.target.value);
    }, 1000);
  }

  return (
    <section className="py-[30px] relative flex sm:flex-row flex-col justify-center items-center">
      <label className='opacity-50' htmlFor="search">Search</label>
      <input 
      className='border-2 rounded sm:mx-[10px] mx-0 sm:my-0 my-[10px] py-[5px] px-[10px] focus:outline-black' 
      type="text" 
      name="search"
      onChange={startSearch}
      />
      <label className='opacity-50' htmlFor="sort">Sort by</label>
      <select onChange={(e) => props.sort(e.target.value)} className='border-[2px] ml-0 sm:ml-[10px] rounded relative h-[41px]' name="sort">
        <option selected disabled></option>
        <option value="name">Name</option>
        <option value="rank">Rank</option>
      </select>
    </section>
  )
}
