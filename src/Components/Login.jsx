import { useState } from "react"

const Login = () => {
   
    const [isSignIn,setIsSignIn]=useState(false);
  
    const toggleForm=()=>{
    setIsSignIn(!isSignIn);
  }
    return (

    <div className="bgImage">
        <div className="bg-black/40 h-screen w-full items-center flex justify-center">
      <div className="bg-black/80 w-[30%]  mt-10 rounded-lg text-white px-10 py-10">
        <h1 className="text-3xl font-bold my-4">{!isSignIn? "Sign In":"Sign Up" }</h1>
        <form action="" className="text-white flex flex-col my-2 gap-2 w-full items-center">
            <input type="text" placeholder="Full Name" className="bg-[#121110] px-4 py-4 rounded-sm w-full" />
            <input type="text" placeholder="UserName" className="bg-[#121110] px-4 py-4 rounded-sm w-full" />
            <input type="text" placeholder="Password" className="bg-[#121110] px-4 py-4 rounded-sm w-full" />
        <button type="submit " className="hover:bg-red-600 text-lg bg-[#E50914] px-3 py-3 rounded-md mt-2 w-full">{!isSignIn?"Sign In":"Sign Up"}</button>
        </form>
        <h2 className="text-lg text-center my-2 cursor-pointer">Forgot Password?</h2>
        <p className="text-center">{isSignIn?"if you already have an account ":"New to Netflix"} <span className="textRed  underline cursor-pointer" onClick={toggleForm}>{isSignIn?"Sign In":"Sign Up "}</span>Now </p>
      </div>
      </div>
    </div>
  )
}

export default Login