
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const HeroDescription = ({title,overview}) => {
    return (
    <div className="bg-gradient-to-r from-black w-full h-screen absolute pt-[20%] pl-[5%] flex flex-col  gap-2 ">
       {/* <img src={poster_path} alt="" /> */}
        <h2 className="text-4xl font-semibold text-white">{title}</h2>
        <p className="text-sm w-[30%] text-slate-400">{overview}</p>
        <div className="flex items-center gap-4">
          <div className="text-xl cursor-pointer px-4 py-2 rounded-lg bg-white font-bold flex items-center gap-2"><span><FaPlay/></span> Play </div>
          <div className="text-xl cursor-pointer px-4 py-2 flex items-center gap-2 rounded-lg bg-white font-bold"><span><BsInfoCircle/></span> More Info</div>
     
        
        </div>
    </div>
  )
}

export default HeroDescription