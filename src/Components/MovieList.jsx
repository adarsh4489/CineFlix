import MovieCard from "./MovieCard"


const MovieList = ({title,movies}) => {
  //  console.log(movies);
  return (
    <div className="px-4 overflow-x-scroll scroll-m-0">
        <h1 className="text-xl my-2 font-bold text-white">{title}</h1>
        <div className="flex   gap-4">
        {movies.map((movie)=>{
          return  <MovieCard key={movie.id} posterPath={movie.poster_path}/>
        })}
        </div>
    </div>
  )
}

export default MovieList