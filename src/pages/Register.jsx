import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextApp } from "../context/AuthContext";

const Register = () => {
  const { signInWithGoogle, createUser } = useContext(AuthContextApp);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-center text-blue-600 font-semibold">Register</h2>
        <h1 className="text-center text-2xl font-bold mt-2">
          Start for free <span className="text-blue-600">Today</span>
        </h1>
        <p className="text-center text-gray-500 mb-4">
          Access to all features. No credit card required.
        </p>

        {/* Google Sign Up Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 cursor-pointer"
          />
          Sign up with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 px-2 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-700 text-sm">Full Name *</label>
            <input
              type="text"
              name="fullName"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Full Name"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">Email *</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">Username *</label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Username"
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

          <div>
            <label className="text-gray-700 text-sm">Re-Password *</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Re-enter Password"
            />
          </div>

          {/* Terms & Policy */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-400"
            />
            <label className="ml-2 text-gray-700 text-sm">
              Agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms and policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold cursor-pointer"
          >
            Submit & Register
          </button>

          <p className="text-center text-gray-600 text-sm mt-2">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
