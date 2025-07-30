import { Menu, Phone, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import React from "react";

const Navbar = () => {
   const [navOpen, setNavOpen] = useState(false);

   return (
      <div className="w-full flex justify-between p-4 md:px-6 lg;px-8  relative">
         <div className="flex gap-4">
            <h1 className="text-3xl md:text-4xl font-bold py-2">Oréa</h1>
            <button
               onClick={() => setNavOpen(true)}
               className="transition-all duration-700 ">
               <Menu />
            </button>
         </div>
         <div className="flex gap-4">
            <p className=" p-2 gap-1 hidden md:flex text-xl">
               <Phone /> +93 303 0551517
            </p>
            <Link to="#" className="p-2 px-3 border h-fit">
               Reservation
            </Link>
         </div>

         {navOpen && (
            <div className="fixed inset-0 z-50 transition-all duration-300">
               <div className="fixed top-0 left-0 h-full w-64 lg:w-96 backdrop-blur-lg saturate-100 shadow-lg flex flex-col p-8 transition-transform duration-800">
                  <button
                     className="absolute top-6 right-6 text-black"
                     onClick={() => setNavOpen(false)}>
                     <X size={32} />
                  </button>
                  <nav className="flex flex-col gap-8 text-black text-2xl mt-12">
                     <Link to="/" onClick={() => setNavOpen(false)}>
                        Home
                     </Link>
                     <Link to="/menu" onClick={() => setNavOpen(false)}>
                        Menu
                     </Link>
                     <Link to="/about" onClick={() => setNavOpen(false)}>
                        About
                     </Link>
                     <Link to="/contact" onClick={() => setNavOpen(false)}>
                        Contact
                     </Link>
                  </nav>
               </div>
               {/* Clicking outside sidebar closes it */}
               <div
                  className="fixed inset-0"
                  onClick={() => setNavOpen(false)}
                  style={{ zIndex: 40 }}
               />
            </div>
         )}
      </div>
   );
};

export default Navbar;
