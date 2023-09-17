import React from "react";
import tv from "../assets/tv.png";
import Pagination from "../assets/Pagination Box.png";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import { Link } from "react-router-dom";
import './Hero.css';

export default function Hero() {
  return (
    <div className="container-fluid hero">
      <div role="navbar" className="navbar navbar-expand-lg">
        {/* logo section */}
        <div className="container me-auto">
          <Link to="/" className="navbar-brand"><img src={tv} alt="logo" width="24" height="24" className="d-inline-block align-text-top" /><span>MovieBox</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* search section */}
          <form className="d-flex" role="search">
            <input type="search" placeholder="What do you want to watch?" />
          </form>

          {/* sign in section */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <span>Sign in</span><ion-icon name="log-in"></ion-icon>
          </div>
        </div>
      </div>
      <div className="container-sm">
        <div className="description">
          <h1 className="display-1">John Wick 3: Parabellum</h1>
          <div className="rating">
            <figure>
              <img src={imdb} alt="IMDb" />
              <figcaption>86.0/100</figcaption>
            </figure>
            <figure>
              <img src={tomato} alt="Rotten Tomatoes" />
              <figcaption>97%</figcaption>
            </figure>
          </div>
          <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <div className="watch">
            <ion-icon name="play-circle"></ion-icon>
            <p>WATCH TRAILER</p>
          </div>
        </div>
        <img src={Pagination} alt="pagination" />
      </div>
    </div>
  )
}