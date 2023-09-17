import React from "react";
import MovieCard from '../MovieCard/MovieCard';

export default function Featured({ movies }) {
  return (
    <div className="continer">
      <div>
        <h1>Featured Movie</h1>
        <i>See more</i>
      </div>
      <MovieCard movies={movies} />
    </div>
  )
}