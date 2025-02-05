
import Navbar from "./Navbar";
import MoviesContainer from "./MoviesContainer";
import HeroSection from "./HeroSection";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  // const[nowPlaying,setNowPlaying]=useState(null);
 useNowPlayingMovies();
  return <div className="w-full">
    <Navbar/>
    <HeroSection/>
    <MoviesContainer/>
  </div>;
};

export default Browse;
