import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const MoviesContainer = () => {
    const movies=useSelector((store)=>store.movies);
    if(!movies.nowPlayingMovies)
        return;
    // console.log(movies,"i am changing")
    // console.log(movies.popularMovies,"popularmovies");
    // console.log(movies.nowPlayingMovies,"nowPlaying");
    // console.log(movies.topRatedMovies,"TopRatedMovies");

  return (
    <div className="flex flex-col gap-4 bg-black">
        <div className="-mt-32 z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        </div>
    </div>
  )
}

export default MoviesContainer