import React from 'react'
import { Movies } from '../movies';
import Movie from './Movie';

export default function MovieList() {

  return (
      <div className="mvlist">
        <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-[20px]">
            {Movies.slice(0, 10).map((movie, id) => (
              <Movie key={id} title={movie.title} image={movie.imageUrl} rank={movie.rank} />
            ))}
          </div>
      </div>
    </div>
  )
}
