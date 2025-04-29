import { useContext, useState } from "react";
import { AuthContextApp } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const { signInWithGoogle, userSignIn } = useContext(AuthContextApp);
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { email: email };
        axios
          .post("https://jobbox-server-ten-bay.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-center text-blue-600 font-semibold">
          Welcome back!
        </h2>
        <h1 className="text-center text-2xl font-bold mt-2">
          Member <span className="text-blue-600">Login</span>
        </h1>
        <p className="text-center text-gray-500 mb-4">
          Access to all features. No credit card required.
        </p>

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 "
          />
          Sign in with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 px-2 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="text-gray-700 text-sm">
              Username or Email address *
            </label>
            <input
              type="text"
              name="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email or Username"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">Password *</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-400"
              />
              <label className="ml-2 text-gray-700 text-sm">Remember me</label>
            </div>
            <a
              href="/forgot-password"
              className="text-blue-600 text-sm hover:underline"
            >
              Forgot Password
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>

          <p className="text-center text-gray-600 text-sm mt-2">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
