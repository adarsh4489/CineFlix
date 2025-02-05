import {MovieImage_URL} from "../Utils/constants"


const MovieCard = ({posterPath}) => {

  return (
    <div className=" min-w-52 hover:scale-105 cursor-pointer">
        <img src={MovieImage_URL+posterPath} alt="movie Poster" className="rounded-md" />
    </div>
  )
}

export default MovieCard