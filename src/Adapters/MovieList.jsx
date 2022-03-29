import React from 'react'
import { Movies } from '../movies';
import Movie from './Movie';

export default function MovieList() {

  return (
      <div className="mvlist">
        <div className="container">
        {Movies.slice(0, 10).map((movie, id) => (
          <Movie key={id} title={movie.title} image={movie.imageUrl} />
        ))}
      </div>
    </div>
  )
}
