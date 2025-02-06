import { API_OPTIONS } from "../Utils/constants";
import {addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    if (movies.topRatedMovies==null) {
        fetchTopRatedMovies();
    }
  }, []);
};

export default useTopRatedMovies;
