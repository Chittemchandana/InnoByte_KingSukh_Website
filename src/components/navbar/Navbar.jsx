import React, { useState } from "react";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  

  return (
    <>
      <nav
        className={`bg-[#e82574] text-white p-4 lg:py-4 gap-12 flex justify-between items-center lg:bg-transparent lg:justify-evenly  `}
      >
        <a href="#"  className="">
          <h3 className="text-lg ">Kingsukh</h3>
          <span className="text-lg">Guest House</span>
        </a>

        <div className="hidden lg:flex gap-12 text-lg  ">
          {["Home", "About", "Rooms", "Services", "Gallery", "Contact"].map(
            (elem, i) => (
              <ScrollLink
                to={elem.toLowerCase()}
                smooth={true}
                duration={500}
                className="navv"
                key={i}
              >
                {elem}
              </ScrollLink>
            )
          )}
        </div>

        <button
          className={`hidden sm:block text-lg bg-[#e82574] px-4 py-2 rounded-md  `}
        >
          <a href="#booknow">BOOK NOW</a>
        </button>

        <button onClick={handleMenu} className="lg:hidden text-3xl">
          {activeMenu ? <GrClose className="text-xl" /> : <HiMenu />}
        </button>
      </nav>

      {/* menu for mobile devices */}
      {activeMenu && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 0.9, y: 0 },
          }}
          initial="hidden"
          animate={activeMenu ? "visible" : "hidden"}
          exit="hidden"
          transition={{ duration: 0.5 }}
          className={`bg-[#e82574] lg:hidden opacity-90 w-full h-[40vh] absolute z-10 `}
        >
          <div
            className={`flex flex-col items-center font-semibold text-white gap-6 mt-5 `}
          >
            {["Home", "About", "Rooms", "Services", "Gallery", "Contact"].map(
              (elem, i) => (
                <ScrollLink
                  to={elem.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="navv"
                  key={i}
                >
                  {elem}
                </ScrollLink>
              )
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
