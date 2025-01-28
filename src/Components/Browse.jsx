import { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/constants";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Browse = () => {
  // const[nowPlaying,setNowPlaying]=useState(null);
const dispatch=useDispatch();
 

  const fetchNowPlaying=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS)
    const json=await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results)); 
  }

  useEffect(()=>{
    fetchNowPlaying();
      },[])
  return (
    <>
    <Navbar/>
    <div className="w-full px-10 py-20">
      <HeroSection/>

    </div>
      </>
  )
}

export default Browse