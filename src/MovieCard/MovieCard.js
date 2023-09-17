import React from 'react';
import { v4 as uuid4 } from 'uuid';
import Movies from './Movies';

export default function MovieCard({ movies }) {
  return (
    <div className="row row-cols-auto">
      {movies.map((movie) => (
        <div key={movie.id} className='col'>
          <Movies key={uuid4()} movie={movie} />
        </div>
      ))}
    </div>
  )
}