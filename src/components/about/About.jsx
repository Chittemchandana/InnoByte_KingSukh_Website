import { motion, useAnimation, useInView } from "framer-motion";
import house from "../../assets/out.jpg";

import "./About.css";
import { useEffect, useRef } from "react";

const About = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const imgInView = useInView(imgRef, {
    once: true,
  });
  const textInView = useInView(textRef, {
    once: true,
  });
  const imgControl = useAnimation();
  const textControl = useAnimation();

  useEffect(() => {
    if (imgInView) {
      
      setTimeout(() => {
        imgControl.start("visible");
      }, 1000);
    }
  }, [imgInView, imgControl]);

  useEffect(() => {
    if (textInView) {
      setTimeout(() => {
        textControl.start("visible");
      }, 800);
    }
  }, [textInView, textControl]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 mt-[40%] lg:mt-[1%] p-4 lg:p-[200px]  ">
      <motion.div
        ref={imgRef}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        // animate="visible"
        animate={imgControl}
        transition={{ duration: 1 }}
        className="  w-full lg:w-1/2 "
      >
        <img
          src={house}
          alt="houseimg"
          className=" image rounded-lg shadow-lg lg:h-[85vh] "
        />
      </motion.div>

      <motion.div className="w-full lg:w-1/2">
        <motion.div
          ref={textRef}
          className="flex flex-col gap-2 lg:gap-5 mt-4  "
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl}
            transition={{ duration: 1 }}
            className="about"
          >
            ABOUT US
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: 800 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl}
            transition={{ duration: 1.5 }}
            className="font-bold lg:tracking-wide text-4xl lg:text-5xl"
          >
            The Best Holidays Start Here!
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 1200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl}
            transition={{ duration: 2 }}
            className="text-zinc-500 text-lg tracking-tight lg:tracking-wider  leading-6 "
          >
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 1600 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl}
            transition={{ duration: 2.5 }}
            className="mt-2"
          >
            <a
              href="https://maps.app.goo.gl/sReJCeoa4E7hC3ow7"
              target="_blank"
              className="text-blue-700 font-bold cursor-pointer "
            >
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </a>
            <br />
            <a
              href="mailto:kkghosh0099@gmail.com"
              target="_blank"
              className="text-blue-800 font-bold cursor-pointer"
            >
              Contact us: +91 9007062180
            </a>
          </motion.div>
          <motion.button
            variants={{
              hidden: { opacity: 0, x: 1200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl}
            transition={{ duration: 2.5 }}
            className="px-6 py-3 mt-2 w-[150px] lg:w-[200px]  bg-[#e82574] text-white rounded-md"
          >
            BOOK NOW
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
