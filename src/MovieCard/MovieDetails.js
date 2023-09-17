import React from "react";
import Loading from "../LoadingSection/Loading";
import MovieDetailSet from './MovieDetailSet';
import { Link } from "react-router-dom";
import tv from "../assets/tv.png";
import { movieDetail } from '../../utils/utilityFunctions';
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const details = await movieDetail(params.id);
  return {details};
}

export default function MovieDetails() {
  const { details } = useLoaderData();
  
  return (
    <div className="movie-detail-card">
      <div className="sidebar">
        <div className="header"> 
          <img src={tv} alt="logo" /><span>MovieBox</span>
        </div>
        <div className="sidebar-menu">
          <ul>
            <Link to="/home"><li><ion-icon name="home-outline"></ion-icon> Home</li></Link>
            <Link to="/movies">
              <li className="active"><ion-icon name="videocam-outline"></ion-icon> Movies</li>
            </Link>
            <Link to="/tv_series"><li><ion-icon name="tv-outline"></ion-icon> TV Series</li></Link>
            <Link to="/upcoming"><li><ion-icon name="calendar-outline"></ion-icon> Upcoming</li></Link>
          </ul>
        </div>
        <div className="ad">
          <h3>Play movie quizes and earn free tickets</h3>
          <p>50k people are playing now</p>
          <button>start playing</button>
        </div>
        <div className="logout">
        <ion-icon name="log-in"></ion-icon> <span>Logout</span>
        </div>
      </div>
      <div className="main">
        {!details ? <Loading /> : <MovieDetailSet details={details} />}
      </div>
    </div>
  )
}