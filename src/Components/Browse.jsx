
import Navbar from "./Navbar";
import MoviesContainer from "./MoviesContainer";
import HeroSection from "./HeroSection";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGpt=useSelector((store)=>store.gpt.showGptSearch)
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
  return <div className="w-full overflow-x-hidden">
    <Navbar/>
   {showGpt?<GPTSearch/>:<><HeroSection/>
    <MoviesContainer/></>}
    
  </div>;
};

export default Browse;
