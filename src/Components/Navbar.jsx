import { FaUser } from "react-icons/fa";
import {LOGO} from "../Utils/constants"
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUser,removeUser } from "../Utils/userSlice";

const Navbar = () => {
const navigate=useNavigate();
  // const user =useSelector(store=>store.user);
const dispatch = useDispatch();

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

  return (
    <div className="w-full z-10 fixed items-center flex justify-between px-12 bg-gradient-to-b from-black ">
      <div>
        <img
          src={LOGO}
          className="w-40"
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-4">
        <FaUser className="text-white text-xl" />
        <button className="cursor-pointer text-white" onClick={handleSignout}>SignOut</button>
      </div>
    </div>
  );
};

export default Navbar;
