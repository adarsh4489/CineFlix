import { useSelector } from "react-redux"
import language from "../Utils/languageConstants"

const GptSearchBar = () => {

    const langKey=useSelector((store)=>store.config.lang)
    // console.log(langKey);
  return (
    <div className="w-full bgImage h-[100vh] ">
        <div className=" h-full">    
        <form action="" className=" flex items-center justify-center bg-black/30  w-full h-full">
            <input type="text" className="px-4 py-2 text-lg rounded-l-lg outline-none placeholder:text-slate-700 w-[50%] bg-white" placeholder={language[langKey].gptSearch} />
             <button className="bgRed text-xl font-semibold text-white px-8 py-2 rounded-r-lg">{language[langKey].search}</button>
        </form>
        </div>
    </div>
  )
}

export default GptSearchBar