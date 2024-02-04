import { closeSidebar } from "@/slice/appSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  });

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="w-1/6">
      {isSignInForm ? (
        <p className="text-xl mb-3 font-bold">Sign In</p>
      ) : (
        <p className="text-xl mb-3 font-bold">Sign Up</p>
      )}

      <form
        onSubmit={e => e.preventDefault()}
        className="flex flex-col space-y-4"
      >
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border-2 rounded-md outline-none"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 border-2 rounded-md outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border-2 rounded-md outline-none"
        />
        <button className="p-2 border-2 w-full mx-auto rounded-lg outline-none bg-red-600 font-bold border-red-600 hover:bg-red-500">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-lg font-thin">
          {isSignInForm ? `First time here?` : "Already have an account ?"}
          <strong
            onClick={toggleSignUpForm}
            className="font-bold cursor-pointer ml-1"
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </strong>
        </p>
      </form>
    </div>
  );
};

export default Login;
