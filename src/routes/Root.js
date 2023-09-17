import React from "react";
import { topRated } from "../../utils/utilityFunctions";
import Hero from "../HeroSection/Hero";
import Featured from '../FeaturedSection/Featured';
import Footer from '../FooterSection/Footer';
import { useLoaderData } from "react-router-dom";
import Loading from "../LoadingSection/Loading";

export async function loader() {
  const movies = await topRated();
  return {movies};
}

export default function Root() {
  const { movies } = useLoaderData();

  return (
    <>
      <div className="container-fluid">
        <Hero />
        {movies ? <Featured movies={movies} /> : <Loading />}
        <Footer />
      </div>
    </>
  )
}