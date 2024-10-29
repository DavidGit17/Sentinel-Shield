import {
  TransformingNavbar,
  ClassicNavbar,
  FloatingNavbar,
} from "@kiranalex/projectui";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` h-16 w-full nav-wrapper flex ${
        isScrolled ? "px-10" : "px-none"
      }`}
    >
      <nav
        className={`nav-bg text-white w-full flex items-center justify-between h-16 fixed top-0 transition-all duration-300 bg-black/80 backdrop-blur-[9px] bg-opacity-70 z-10 shadow-lg 
          ${isScrolled ? "px-10" : ""}`}
      >
        <div>
          <p>LOGO</p>
        </div>
        <div className="flex">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
        <div>
          <p>LOGIN</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// {
//   /* <TransformingNavbar
//         listData={navListData}
//         logo={{
//           content: "Logo",

//           link: "/",

//           ButtonContent: "Click Me",

//           ButtonStyle: "bg-blue-500 text-white",

//           logoStyle: "text-white",
//         }}
//         textColor="blue"
//         backgroundColor="black"
//       /> */
//   // const navListData = [
//   //   { name: "Home", link: "/" },
//   //   { name: "About", link: "/about" },
//   //   { name: "Contact", link: "/contact" },
//   //   { name: "Me", link: "/me" },
//   // ];
// }
