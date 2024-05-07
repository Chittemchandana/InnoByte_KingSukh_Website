import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import { motion, useAnimation, useInView } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://www.kingsukhguesthouse.com/assets/out.jpg",
    "https://www.kingsukhguesthouse.com/assets/ayodhya.webp",
    "https://www.kingsukhguesthouse.com/assets/large.jpg",
    "https://www.kingsukhguesthouse.com/assets/palash.webp",
    "https://www.kingsukhguesthouse.com/assets/small.jpg",
    "https://www.kingsukhguesthouse.com/assets/baranti.webp",
    "https://www.kingsukhguesthouse.com/assets/recep.jpg",
    "https://www.kingsukhguesthouse.com/assets/flower.jpg",
    "https://www.kingsukhguesthouse.com/assets/mithonDam.webp",
    "https://www.kingsukhguesthouse.com/assets/room1.jpg",
    "https://www.kingsukhguesthouse.com/assets/ayodhya.webp",
    "https://www.kingsukhguesthouse.com/assets/palash.webp",
  ];

  const headRef = useRef();
  const imgRef = useRef();
  const inView = useInView(headRef, { once: true });
  const imgView = useInView(imgRef, { once: true });
  const headControls = useAnimation();
  const imgControls = useAnimation();
  useEffect(() => {
    if (inView) {
      headControls.start("visible");
    }
  }, [inView]);
  useEffect(() => {
    if (imgView) {
      setTimeout(() => {
        imgControls.start("visible");
      },1000);
    }
  }, [imgView]);

  return (
    <div className="px-4 lg:px-7">
      <motion.h2
        ref={headRef}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={headControls}
        transition={{ duration: 1 }}
        className="gallery_header text-xl  font-semibold"
      >
        Gallery
      </motion.h2>
      <motion.div
        ref={imgRef}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={imgControls}
        transition={{ duration: 1 }}
      className="mt-10 flex  flex-wrap gap-10"
      >
        {images.map((image, i) => (
          <img
            className="w-[40vw] lg:w-[30vw] lg:h-[20vw] rounded-lg shadow-xl object-cover border-2 border-zinc-500 "
            key={i}
            src={image}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
