import { closeSidebar } from "@/slice/appSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignInClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      null
    );
    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(userCredential => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch(error => {
          // const errorCode = error.code;
          const errorCode = "User Invalid :";
          const errorMessage = "Wrong credentials, check email or password";
          // const errorMessage = error.message;
          setErrorMessage(`${errorCode} ${errorMessage}`);
        });
    }
  };

  const handleSignUpClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(userCredential => {
          const user = userCredential.user;
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} ${errorMessage}`);
        });
    }
  };

  return (
    <div className="w-1/6">
      {isSignInForm ? (
        <>
          <p className="text-xl mb-3 font-bold">Sign In</p>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-col space-y-4"
          >
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="p-2 border-2 rounded-md outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-2 border-2 rounded-md outline-none"
            />
            <p className="text-red-400 text-xs">{errorMessage}</p>
            <button
              onClick={handleSignInClick}
              className="p-2 border-2 w-full mx-auto rounded-lg outline-none bg-red-600 font-bold border-red-600 hover:bg-red-500"
            >
              Sign In
            </button>
            <p className="text-md font-thin">
              First time here?
              <strong
                onClick={toggleSignUpForm}
                className="font-bold cursor-pointer ml-1"
              >
                Sign Up
              </strong>
            </p>
          </form>
        </>
      ) : (
        <>
          <p className="text-xl mb-3 font-bold">Sign Up</p>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-col space-y-4"
          >
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 border-2 rounded-md outline-none"
            />
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="p-2 border-2 rounded-md outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-2 border-2 rounded-md outline-none"
            />
            <p className="text-red-400 text-xs">{errorMessage}</p>
            <button
              onClick={handleSignUpClick}
              className="p-2 border-2 w-full mx-auto rounded-lg outline-none bg-red-600 font-bold border-red-600 hover:bg-red-500"
            >
              Sign Up
            </button>
            <p className="text-md font-thin">
              Already have an account
              <strong
                onClick={toggleSignUpForm}
                className="font-bold cursor-pointer ml-1"
              >
                Sign In
              </strong>
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
