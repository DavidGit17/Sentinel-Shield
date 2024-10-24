import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  // Helper function to determine active class and hover behavior
  const getNavLinkClass = (isActive) =>
    isActive
      ? "text-custom-C-gray"
      : "text-custom-D-gray hover:text-custom-H-gray";

  return (
    <div className="max-w-screen-xlg ">
      <nav className="flex justify-between items-center h-16 font-inter">
        <Link to="/" className="text-[18px] pr-4">
          <ul className="leading-[22px]">
            <li className="text-white">SENTINEL</li>
            <li className="text-custom-purp font-semibold">SHIELD</li>
          </ul>
        </Link>

        <ul className="flex space-x-10 navtabs px-5 text-[15px] font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/whysentinel"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Why Sentinel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div>
          <Link className="text-white border font-medium border-custom-Br-gray hover:bg-white hover:text-black px-10 leading-none py-[13.5px] rounded-[8px] flex justify-center text-[15px]">
            Sign in
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
