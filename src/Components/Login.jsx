import { useRef, useState } from "react";
import { loginValidation } from "../Utils/Test";
import { auth } from "../Utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate=useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitClick = () => {
    const message = loginValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert("SignUp successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("SignIn successfully");
         console.log(user);
         navigate()
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+"-"+errorMessage)
        });
    }
  };
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="bgImage">
      <div className="bg-black/40 h-screen w-full items-center flex justify-center">
        <div className="bg-black/75 w-[30%]  mt-10 rounded-lg text-white px-10 py-10">
          <h1 className="text-3xl font-bold my-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="text-white flex flex-col my-2 gap-2 w-full items-center"
          >
            {!isSignIn ? (
              <input
                type="text"
                placeholder="Full Name"
                ref={fullName}
                className="bg-[#121110] px-4 py-4 rounded-sm w-full"
              />
            ) : null}
            <input
              type="text"
              placeholder="Email"
              ref={email}
              className="bg-[#121110] px-4 py-4 rounded-sm w-full"
            />
            <input
              type="text"
              placeholder="Password"
              ref={password}
              className="bg-[#121110] px-4 py-4 rounded-sm w-full"
            />
            {errorMessage && (
              <p className="font-semibold border border-red-600 px-2  textRed">
                {errorMessage}
              </p>
            )}
            <button
              className="hover:bg-red-600 text-lg bg-[#E50914] px-3 py-3 rounded-md mt-2 w-full"
              onClick={handleSubmitClick}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <h2 className="text-lg text-center my-2 cursor-pointer">
            Forgot Password?
          </h2>
          <p className="text-center ">
            {isSignIn ? "New to Netflix": "if you already have an account "}
            <span
              className="textRed  underline cursor-pointer"
              onClick={toggleForm}
            >
              {isSignIn ?"Sign Up ":"Sign In" }
            </span>
            Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
