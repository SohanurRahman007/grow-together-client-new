import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaUserSecret } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showLogout, setShowLogout] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleAvatarClick = () => {
    setShowLogout((prev) => !prev);
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="text-xl font-semibold navLink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/browseTips" className="text-xl font-semibold navLink">
          Browse Tips
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/shareTip" className="text-xl font-semibold navLink">
            Share a Garden Tip
          </NavLink>
        </li>
      )}

      <li>
        <NavLink to="/gardener" className="text-xl font-semibold navLink">
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink to="/myTip" className="text-xl font-semibold navLink">
          My Tips
        </NavLink>
      </li>
    </>
  );

  const handleLogout = async () => {
    try {
      await logOut();
      await Swal.fire({
        title: "Logged out successfully!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-[0_10px_40px_rgba(187,247,208,0.6)] dark:shadow-[0_10px_40px_rgba(22,163,74,0.6)] rounded-b-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className=" text-2xl font-semibold cursor-pointer flex justify-center items-center"
          >
            <img src={logo} className="h-14 w-14" alt="" />
            <span className="font-bold"> Grow</span>{" "}
            <span className="text-green-600 text-4xl">To</span>
            <span className="font-bold">gether</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end gap-3 relative">
          {user ? (
            <div className="relative">
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <button
                  onClick={handleAvatarClick}
                  className="btn h-10 w-10 p-0 overflow-hidden rounded-sm"
                >
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="w-full h-full object-cover rounded-sm"
                    />
                  ) : (
                    <FaUserSecret className="text-white text-xl" />
                  )}
                </button>
              </div>

              {/* Logout Dropdown */}
              {showLogout && (
                <div className="absolute -right-4 mt-2 bg-gray-50 text-white dark:bg-gray-800  border rounded shadow z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn text-xl font-semibold">
              Login
            </Link>
          )}

          {/* Theme Toggle */}
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="toggle"
              onChange={handleToggle}
              checked={theme === "dark"}
            />
            <span>{theme === "dark" ? "🌙" : "☀️"}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
