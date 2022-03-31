import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getMovieId } from '../movies';
import React from 'react'

export default function MovieSingle() {
  let params = useParams();
  let movie = getMovieId(params.movieId);

  return (
    <>
      <nav>
        <Link to="/">Back</Link>
      </nav>
      <h1>Movie Single Page</h1>
      <p>{movie.title}</p>
    </>
  )
}
