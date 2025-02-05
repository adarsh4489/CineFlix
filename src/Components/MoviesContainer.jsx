import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const MoviesContainer = () => {
    const movies=useSelector((store)=>store.movies);
    if(!movies.nowPlayingMovies)
        return;
    // console.log(movies,"i am changing")
    // console.log(movies.nowPlayingMovies[0],"abcd");
  return (
    <div className="flex flex-col gap-4 bg-black">
        <div className="-mt-32 z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        {/* <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/> */}
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        </div>
    </div>
  )
}

export default MoviesContainer