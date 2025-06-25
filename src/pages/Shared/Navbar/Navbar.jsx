import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaUserSecret } from "react-icons/fa";
import Swal from "sweetalert2";
import { GiDoubleStreetLights } from "react-icons/gi";
import { TbHomeFilled } from "react-icons/tb";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

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

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="text-md font-semibold navLink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/exploreGardener"
          className="text-md font-semibold navLink"
        >
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink to="/browseTipsPage" className="text-md font-semibold navLink">
          Browse Tips Page
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/shareTip" className="text-md font-semibold navLink">
              Share a Garden Tip
            </NavLink>
          </li>
          <li>
            <NavLink to="/myTipsPage" className="text-md font-semibold navLink">
              My Tips Page
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-[0_10px_40px_rgba(187,247,208,0.6)] dark:shadow-[0_10px_40px_rgba(22,163,74,0.6)] w-full sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 rounded-b-sm">
        {/* Navbar Start */}
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-semibold flex items-center">
            {/* <img src={logo} className="h-14 w-14" alt="Logo" /> */}
            <TbHomeFilled className="text-green-600 text-5xl" />
            <span className="font-bold">Grow</span>
            <span className="text-green-600 text-4xl">To</span>
            <span className="font-bold">gether</span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Dashboard button */}
              <Link to="/dashboard" className="btn btn-sm">
                Dashboard
              </Link>

              {/* User avatar with tooltip */}
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <div className="btn h-10 w-10 p-0 overflow-hidden rounded-full">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserSecret className="text-white text-xl" />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn text-md font-semibold">
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
            <span>{theme === "dark"}</span>
          </label>
          {/* Logout button */}
          <button onClick={handleLogout} className="btn btn-sm">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
