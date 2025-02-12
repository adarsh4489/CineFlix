import { FaUser } from "react-icons/fa";
import {LOGO, supported_Languages} from "../Utils/constants"
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUser,removeUser } from "../Utils/userSlice";
import { toggleGptSearch } from "../Utils/gptSlice";
import  {changeLanguage} from "../Utils/configSlice";

const Navbar = () => {
const navigate=useNavigate();
  // const user =useSelector(store=>store.user);
const dispatch = useDispatch();
const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
// console.log(showGptSearch);

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
        // unsubscribe when components unmounts
return ()=> unsubscribe();
      });
},[dispatch,navigate])
  
  const handleSignout=()=>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
      toast("signout Succesfully");
    }).catch((error) => {
      toast(error);
    });
  };

  const handleGptSearch=()=>{
// toggle GPTSearch
dispatch(toggleGptSearch());
  }

  const handleLanguageChange=(e)=>{
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="w-full z-100 backdrop-blur-2xl fixed items-center flex justify-between px-12 bg-gradient-to-r from-black ">
      <div>
        <img
          src={LOGO}
          className="w-40"
          alt="logo"
        />
       
      </div>
      <div className="flex items-center gap-4">
        {showGptSearch&&<select name="" id="" className="bg-slate-500 text-white outline-none rounded p-1" onChange={handleLanguageChange}>
          {supported_Languages.map((language)=>{
            return <option key={language.identifier} value={language.identifier}>{language.name}</option>
          })}
          
        </select>}
       
        <button className="bgRed px-2 py-1 text-white rounded font-semibold cursor-pointer" onClick={handleGptSearch}>{showGptSearch?"Home":"GPT Search"}</button>
        <FaUser className="text-white text-xl" />
        <button className="cursor-pointer text-white" onClick={handleSignout}>SignOut</button>
      </div>
    </div>
  );
};

export default Navbar;
