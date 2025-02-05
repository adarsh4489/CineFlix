import { API_OPTIONS } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const movies = useSelector((store) => store.movies);
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
    if (movies.nowPlayingMovies==null) {
      fetchNowPlaying();
    }
  }, []);
};

export default useNowPlayingMovies;
