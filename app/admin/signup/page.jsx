"use client"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/app/lib/firebase/firbaseConfig";

import withReactContent from "sweetalert2-react-content";

const AdminSignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpWithEmailAndPass, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading] =
    useSignInWithGoogle(auth);
  const [userAlreadyExist] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();

    try {
      await signUpWithEmailAndPass(email, password);
    } catch {
      console.log("Firebase Authentication Error:", error.message);
    }

    if (error) {
      console.log("Firebase Authentication Error:", error.message);
    }
    if (!loading && !googleLoading) {
      if (user || googleUser) {
        navigate("/admin");
      }
    }
  };

  useEffect(() => {
    if (userAlreadyExist) {
      navigate("/admin");
    }
  }, [userAlreadyExist, googleUser, googleLoading]);

  return (
    <div className="font-[sans-serif]">
      <div className="flex gap-4 h-screen m-auto items-center justify-center">
        <div className="w-full p-6 max-w-[30rem]">
          <form
            onSubmit={(e) => {
              handleSubmission(e);
            }}
          >
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">Sign Up</h3>
              <p className="text-sm mt-4 text-gray-800">
                Already have an account?
                <Link
                  to="/admin/login"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  required
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                  placeholder="Enter email"
                  onInput={(e) => {
                    setEmail(e.target.value.trim());
                  }}
                />
                <img
                  src="/path/to/email-icon.svg"
                  alt="Email Icon"
                  className="w-[18px] h-[18px] absolute right-4"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-[15px] mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                  placeholder="Enter password"
                  onInput={(e) => {
                    setPassword(e.target.value.trim());
                  }}
                />
                <img
                  src="/path/to/password-icon.svg"
                  alt="Password Icon"
                  className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mt-8">
              <p
                className={`text-red-600 font-semibold ${
                  error ? "" : "hidden"
                }`}
              >
                {error?.message}
              </p>
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                {loading ? "signing up.." : "Sign Up"}
              </button>
            </div>

            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                signInWithGoogle();
              }}
            >
              {googleLoading ? (
                "..."
              ) : (
                <>
                  <FaGoogle className="text-2xl" />
                  <span>Sign Up with Google</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUpPage;
