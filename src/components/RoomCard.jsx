import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { IoMdColorFill } from "react-icons/io";
import { RiPoliceBadgeLine } from "react-icons/ri";

const RoomCard = ({ rooms }) => {
  const [activeBtns, setActiveBtns] = useState(rooms.map(() => false));

  const roomRefs = rooms.map(() => useRef(null));
  const roomControls = rooms.map(() => useAnimation());

  useEffect(() => {
    roomRefs.forEach((ref, i) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              roomControls[i].start("visible");
            }, i * 1000);
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, []);

  const handleButtonClick = (index) => {
    setActiveBtns((prevState) =>
      prevState.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <>
      {rooms.map((room, i) => {
        return (
          <motion.div
            ref={roomRefs[i]}
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={roomControls[i]}
            transition={{ duration: 1 }}
            className="h-[58vh] lg:h-[63vh] w-[90vw] lg:w-[20vw] shadow-2xl rounded-lg"
          >
            <div className="relative">
              <img className="rounded" src={room.img} alt="" />
              <div className="flex gap-2 items-center absolute top-[220px] lg:top-[190px] left-[225px] lg:left-[185px]">
                <span className="text-2xl bg-white rounded-full h-8 w-8 p-1">
                  <FaHeart className="text-pink-300" />
                </span>
                <span className="text-2xl bg-white rounded-full h-8 w-8 p-1">
                  <IoMdColorFill className="text-violet-400" />
                </span>
                <span className="text-2xl bg-white rounded-full h-8 w-8 p-1">
                  <RiPoliceBadgeLine className="text-blue-400" />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:gap-2 p-3">
              <h3 className="text-xl tracking-wider">{room.name}</h3>
              <p className="text-zinc-500 tracking-widest lg:tracking-wide">
                {room.desc}
              </p>
              <p className="text-zinc-500 tracking-wider">
                Starting from{" "}
                <span className="text-black font-bold">
                  Rs.{room.price}/night
                </span>
              </p>
              <button
                onClick={() => handleButtonClick(i)}
                className={`bg-[#e82574] w-[120px] px-4 py-2 rounded-lg text-white font-bold ${
                  activeBtns[i] ? "bg-green-600" : "#e82574"
                }`}
              >
                {activeBtns[i] ? "Booked" : "Book Now"}
              </button>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default RoomCard;
