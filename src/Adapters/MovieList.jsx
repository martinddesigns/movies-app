import React, { useState } from 'react'
import { Movies } from '../movies';
import Movie from './Movie';

export default function MovieList({movieSearch}) {
  return (
      <section className="mvlist">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-[20px]">
            {Movies.filter((movie) => {
              if(movieSearch == '') {
                return movie;
              } else if(movie.title.toLowerCase().includes(movieSearch.toLowerCase())) {
                return movie;
              }
            }).map((movie, id) => (
              <Movie key={id} title={movie.title} image={movie.imageUrl} rank={movie.rank} />
            ))}
          </div>
      </div>
    </section>
  )
}
