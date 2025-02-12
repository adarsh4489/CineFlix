import { API_OPTIONS } from "../Utils/constants";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

const usePopularMovies = () => {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (movies.popularMovies==null) {
        fetchPopular();
    }
  }, []);
};

export default usePopularMovies;
