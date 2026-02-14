// import React from "react";
// // # is used for jump whose id is that
// function Navbar() {
//   return (
//     <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold">MyClone</h1>
//       <div className="flex gap-6">
//         <a href="#home" className="hover:text-blue-500 transition">Home</a> 
//         <a href="#features" className="hover:text-blue-500 transition">Features</a>
//         <a href="#pricing" className="hover:text-blue-500 transition">Pricing</a>
//         <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React from "react";
// import {Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold">MyClone</h1>
//       <div className="flex gap-6">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/pricing">Pricing</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">MyClone</h1>

      {/* Navigation Links */}
      <div className="flex gap-6">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500 transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500 transition"
          }
        >
          Pricing
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500 transition"
          }
        >
          Contact
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;