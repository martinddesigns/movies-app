import React, { useState, useEffect } from 'react'
import { Movies } from '../movies';
import Movie from './Movie';

export default function MovieList({movieSearch, loader}) {

  
    const filteredArray = Movies.filter((movie) => {
      if (movieSearch == '') {
        return movie;
      } else if (movie.title.toLowerCase().includes(movieSearch.toLowerCase())) {
        return movie;
      }
    })

    console.log(filteredArray)
  

  return (
      <section className="mvlist">
        <div className="container">
          {loader ?
          <h1 className='text-center'>Loading...</h1> :
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-[20px]">
            {filteredArray.length !== 0 ? filteredArray.map((movie, id) => (
                <Movie key={id} title={movie.title} image={movie.imageUrl} rank={movie.rank} />
            )) : <p className='text-center'>Nothing was found</p>} 
          </div>
          }
      </div>
    </section>
  )
}
