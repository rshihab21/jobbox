import { useContext, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/jobhub-logo.svg";
import { Link } from "react-router-dom";
import { AuthContextApp } from "../context/AuthContext";
import { span } from "motion/react-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userSignOut } = useContext(AuthContextApp);
  const handleSignOut = () => {
    userSignOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navItem = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "All Jobs", path: "/jobs" },
    { id: 3, label: "My Application", path: "/myapplication" },
    { id: 4, label: "Add Job", path: "/addjob" },
    { id: 5, label: "My Posted Job", path: "/mypostedjob" },
  ];

  return (
    <nav className="bg-[#F8FAFC] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img src={logo} alt="JobBox" className="h-8 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItem.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="text-gray-900 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Register & Sign In */}
          <div className="hidden md:flex items-center space-x-4">
            {user?.email ? (
              <span
                className="cursor-pointer font-semibold"
                onClick={handleSignOut}
              >
                Sign Out
              </span>
            ) : (
              <>
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register
                </Link>
                <Link
                  to="/signin"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-2">
          {navItem.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block text-center py-2 text-gray-900 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col items-center space-y-2 py-4">
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
            <Link
              to="/signin"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
