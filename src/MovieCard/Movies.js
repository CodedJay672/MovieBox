import React from "react";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import { Link } from "react-router-dom";

export default function Movies({ movie }) {
  const hrefPath = `/movies/${movie.id}`;

  return (
    <div className="card" style={{width: "18rem"}}>
      <Link to={hrefPath} data-testid="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="card-img-top img-fluid"
          data-testid="movie-poster"
        />
        <div className="card-body">
          <p data-testid="movie-release-date" className="card-text">Realesed: {movie.release_date}</p>
          <h2 data-testid="movie-title" className="card-title">{movie.title}</h2>
          <div className="rating">
            <figure>
              <img src={imdb} alt="IMDb" />
              <figcaption>{movie.vote_average * 10}.0/100</figcaption>
            </figure>
            <figure>
              <img src={tomato} alt="Rotten Tomatoes" />
              <figcaption>97%</figcaption>
            </figure>
          </div>
        </div>
      </Link>
    </div>
  )
}