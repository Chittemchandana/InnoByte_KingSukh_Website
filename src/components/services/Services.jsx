import palash from "../../assets/palash.webp";
import "./Services.css";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";
import { IoRestaurant } from "react-icons/io5";
import { TbMapShare } from "react-icons/tb";
import { useEffect, useRef } from "react";
import { animate, motion, useAnimation, useInView } from "framer-motion";

function Services() {
  const ref = useRef(null);
  const bookingCount = useRef(null);
  const customerCount = useRef(null);

  const isInView = useInView(ref, { once: true });
  const listControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        listControls.start("visible");
      }, 1000);
    } else {
      listControls.start("hidden");
    }
  }, [isInView]);

  const animationBookingCount = () => {
    animate(0, 200, {
      duration: 2,
      onUpdate: (v) => (bookingCount.current.textContent = v.toFixed()),
    });
  };
  const animationCustomerCount = () => {
    animate(0, 250, {
      duration: 2,
      onUpdate: (v) => (customerCount.current.textContent = v.toFixed()),
    });
  };

  return (
    <>
      <div
        className="h-screen relative mt-[420px]  lg:mt-[50px] px-5 lg:px-[550px] "
        style={{
          backgroundImage: `url(${palash})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "80vh",
          width: "100vw",
        }}
        id="services"
      >
        <div className="absolute mt-5 lg:mt-0 opacity-75 shadow-2xl rounded-lg lg:rounded-none bg-white h-[75vh] lg:h-[80vh] w-[90vw] lg:w-[35vw] p-4  ">
          <section className="p-8 flex flex-col gap-4">
            <h3 className="h3_header font-bold text-lg tracking-widest ">
              SERVICES
            </h3>
            <h2 className="text-4xl tracking-widest font-bold  ">
              Strive Only For The Best
            </h2>
            <motion.div
              ref={ref}
              className="flex flex-col gap-8 text-2xl tracking-wider mt-5 font-semibold"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 300 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={listControls}
                transition={{ duration: 1 }}
                className="flex gap-8 items-center"
              >
                <span>
                  <RiPoliceBadgeLine className="text-5xl text-sky-500 " />
                </span>
                High Class Security
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 300 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={listControls}
                transition={{ duration: 1.3 }}
                className="flex gap-8 items-center"
              >
                <span>
                  <Ri24HoursLine className="text-5xl text-pink-500" />
                </span>
                24 Hours Room Service
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 300 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={listControls}
                transition={{ duration: 1.6 }}
                className="flex gap-8 items-center"
              >
                <span>
                  <IoRestaurant className="text-5xl text-purple-500" />
                </span>
                Restaurant
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 300 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={listControls}
                transition={{ duration: 2 }}
                className="flex gap-8 items-center"
              >
                <span>
                  <TbMapShare className="text-5xl text-green-500" />
                </span>
                Tourist Guide Support
              </motion.p>
            </motion.div>
          </section>
        </div>
      </div>

      <div className="px-5  mt-10 h-[40vh]  ">
        <div className=" px-5 shadow-2xl rounded-3xl p-[50px] flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-[30%]">
          <motion.div className=" bg-white flex flex-col items-center gap-1  ">
            <motion.h2
              ref={bookingCount}
              whileInView={animationBookingCount}
              className="text-5xl font-bold tracking-widest"
            >
              200
            </motion.h2>
            <span className="text-2xl text-zinc-500 tracking-wider">
              Bookings Completed
            </span>
          </motion.div>
          <motion.div className=" bg-white flex flex-col items-center gap-1 ">
            <motion.h2
              ref={customerCount}
              whileInView={animationCustomerCount}
              className="text-5xl font-bold tracking-widest"
            >
              250
            </motion.h2>
            <span className="text-2xl text-zinc-500 tracking-wider">
              Happy Customers
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Services;
