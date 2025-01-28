

const MovieCard = ({items}) => {
  const {title,overview,poster_path}=items;
    return (
    <div className="w-[32%] border border-amber-400 flex flex-col p-2 ">
       <img src={poster_path} alt="" />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-slate-400">{overview.slice(0,100)+"..."}</p>
    </div>
  )
}

export default MovieCard