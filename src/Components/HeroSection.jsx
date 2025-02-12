import { useSelector } from "react-redux";
import HeroDescription from "./HeroDescription";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [teaserKey, setTeaserKey] = useState();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  useEffect(() => {
    if (!movies||movies.length===0) return ;
    const movie_id = movie.id;
    async function fetchTeaser () {
      const videosData = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
        API_OPTIONS
      );
      const json = await videosData.json();
      
      const teasersData = json.results.filter((video) => video.type == "Teaser");
      const teaser = teasersData[0];
      setTeaserKey(teaser.key);
    };
    fetchTeaser();
  }, [movies]);
  
  if(!movies)return;

  const movie = movies[0];
  
  const {title,overview,}=movie;
  return (
    <div className="w-screen flex items-center ">
      <iframe
  className="w-screen aspect-video"
  src={`https://www.youtube.com/embed/${teaserKey}?autoplay=1&mute=1&loop=1&playlist=${teaserKey}&controls=0&modestbranding=1&showinfo=0&rel=0&fs=1`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

      <HeroDescription title={title} overview={overview} />
    </div>
  );
};

export default HeroSection;
