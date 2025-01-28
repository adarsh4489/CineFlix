import { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Browse = () => {
  // const[nowPlaying,setNowPlaying]=useState(null);
  const dispatch = useDispatch();

  const fetchNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);
  return <div className="w-full">
    <Navbar/>
    <HeroSection/>
  </div>;
};

export default Browse;
