import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import ayodhya from "../../assets/ayodhya.webp";
import { motion } from "framer-motion";


const Home = () => {

  const [activebtn, setActivebtn] = useState(false)
  
    const handleBtn = () => {
      setActivebtn(!activebtn)
  
  }
   
  return (
    <div id="home"
      className="lg:p-[6px] relative "
      style={{
        backgroundImage: `url(${ayodhya})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar />

      <div className="relative" id="home">
        <div className="absolute text-center mt-[18%] lg:ml-[25%] lg:mt-[10%]">
          <motion.p 
          variants={{
            hidden: {opacity: 0, y:100},
            visible: {opacity: 1, y:0}
          }}

          initial="hidden"
          animate="visible"
          transition={{duration: 1.5, delay: 0.5}}
          
          className="text-zinc-50 text-xl">Simple - Unique - Friendly</motion.p>
          <motion.p 
            variants={{
              hidden: {opacity: 0, y:100},
              visible: {opacity: 1, y:0}
            }}
  
            initial="hidden"
            animate="visible"
            transition={{duration: 1.5, delay: 1}}
          
          className="text-7xl text-white mt-6">
            Make Yourself At Home <br /> In Our{" "}
            <span className="text-[#e82574]"> Guest House</span>.
          </motion.p>
        </div>
      </div>

      <div className="absolute -bottom-10 md:-bottom-12 left-[5%] md:left-[10%] w-[90%] md:w-[80%] h-[10vh] md:h-[15vh] rounded-2xl bg-white shadow-xl ">
        <button
        onClick={handleBtn}
        
        className={`absolute top-5 md:top-[30%] left-[30%] md:left-[45%] px-4 py-2 bg-[#e82574] text-white rounded-lg font-bold ${activebtn ? "bg-green-600" : "bg-[#e82574]"} `}>
          {activebtn ? "BOOKED" : "BOOK NOW"}
        </button>
      </div>
    </div>
  );
};

export default Home;
