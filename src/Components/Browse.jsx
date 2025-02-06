
import Navbar from "./Navbar";
import MoviesContainer from "./MoviesContainer";
import HeroSection from "./HeroSection";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  // const[nowPlaying,setNowPlaying]=useState(null);
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
  return <div className="w-full overflow-x-hidden">
    <Navbar/>
    <HeroSection/>
    <MoviesContainer/>
  </div>;
};

export default Browse;
