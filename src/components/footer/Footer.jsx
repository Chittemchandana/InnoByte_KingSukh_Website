import React from "react";
import Facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
const Footer = () => {
  return (
    <>
      <div className="bg-black lg:h-[50vh] text-white flex flex-col lg:flex-row lg:justify-evenly gap-6 shadow-2xl ">
        <div className="flex flex-col p-4 lg:p-8 gap-4 lg:gap-6  lg:w-[25%]">
          <h2 className="text-2xl">
            KingSukh <br /> <p>Guest House</p>
          </h2>
          <p className="text-xl lg:text-lg tracking-wider text-zinc-500 hover:text-white duration-300">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button className="text-lg bg-[#e82574] px-4 py-2 rounded-md w-[40vw] lg:w-[10vw] ">
            BOOK NOW
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4 lg:w-[25%] lg:p-8 lg:gap-6 ">
          <h2 className="text-2xl">QUICK LINKS</h2>
          <a
            className="text-xl lg:text-lg tracking-wider  text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Browse Destinations
          </a>
          <a
            className="text-xl lg:text-lg tracking-wider  text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Special Offers & Packages
          </a>
          <a
            className="text-xl lg:text-lg tracking-wider  text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Room Types & Amenities
          </a>
          <a
            className="text-xl lg:text-lg tracking-wider  text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Customer Reviews & Ratings
          </a>
          <a
            className="text-xl lg:text-lg tracking-wider  text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Travel Tips & Guides
          </a>
        </div>
        <div className="flex flex-col p-4 gap-4 lg:w-[25%] lg:p-8  lg:gap-6 ">
          <h2 className="text-2xl">OUR SERVICES</h2>
          <a
            className="text-xl lg:text-lg text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Travel Tips & Guides
          </a>
          <a
            className="text-xl lg:text-lg text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Flexible Booking Options
          </a>
          <a
            className="text-xl lg:text-lg text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Airport Transfers
          </a>
          <a
            className="text-xl lg:text-lg text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Wellness & Recreation
          </a>
        </div>
        <div className="flex flex-col p-4 gap-4 lg:w-[25%] lg:p-8  lg:gap-6 ">
          <h2 className="text-2xl">CONTACT US</h2>
          <a
            className="text-xl lg:text-lg tracking-wider  text-zinc-500 hover:text-white duration-300"
            href=""
          >
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </a>
          <a
            className="text-xl lg:text-lg tracking-wider  text-zinc-500 hover:text-white duration-300"
            href=""
          >
            kkghosh0099@gmail.com
          </a>
          <a
            className="text-xl lg:text-lg tracking-wider  text-zinc-500 hover:text-white duration-300"
            href=""
          >
            +91 9007062180
          </a>

          <div className="flex gap-6">
            <span>
              <img src={Facebook} alt="" className="w-7" />
            </span>
            <span>
              <img src={instagram} alt="" className="w-7" />
            </span>
            <span>
              <img src={youtube} alt="" className="w-7" />
            </span>
            <span>
              <img src={twitter} alt="" className="w-7" />
            </span>
          </div>
        </div>
      </div>

      <div className="p-4  lg:p-1 flex flex-col text-center  bg-black">
        <p className="text-sm  text-zinc-500 hover:text-white duration-300 tracking-widest">
          Copyright © 2024 Kingsukh Guest House.
        </p>
        <p className="text-sm  text-zinc-500 hover:text-white duration-300 tracking-widest ">
          All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
