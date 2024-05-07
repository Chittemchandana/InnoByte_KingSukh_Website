import React from "react";
import "./Contact.css";
import { SiGooglemaps } from "react-icons/si";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";

const Contact = () => {
  return (
    <div className="bg-[#e82574] relative lg:bg-white lg:flex  p-4 lg:px-[300px] mt-16 mb-0 lg:mb-8 ">
      <form
        action=""
        className="flex flex-col p-8 lg:px-[150px] lg:tracking-widest  shadow-2xl mb-2 bg-white rounded-lg lg:w-[80vw] "
      >
        <h2 className="text-[#e82574] text-2xl">Send a Message</h2>
        <br />
        <input
          className="name p-4 outline-none"
          type="text"
          placeholder="First Name"
        />
        <input
          className="name p-4 outline-none"
          type="text"
          placeholder="Last Name"
        />
        <input className="p-4 outline-none" type="email" placeholder="Email" />
        <input
          className="p-4 outline-none"
          type="phone"
          placeholder="Mobile No."
        />
        <textarea className="p-4 outline-none" placeholder="Message"></textarea>
        <button
          className="px-3 py-2 bg-[#e82574] text-white lg:w-[10vw] rounded-full "
          type=""
        >
          Send
        </button>
      </form>
      <div className="flex flex-col gap-6 bg-[#e82574] p-4 text-white shadow-2xl rounded-lg lg:w-[20vw] lg:h-[50vh] lg:p-8 lg:absolute lg:right-[70rem] lg:-top-6 ">
        <h2 className="text-xl lg:text-4xl">Contact Info</h2>

        <div className="flex gap-3 items-center text-xl ">
          <IoMailOutline className="text-3xl" />
          <a
            href="mailto:kkghosh0099@gmail.com"
            target="_blank"
            className="text-lg"
          >
            kkghosh0099@gmail.com
          </a>
        </div>
        <div className="flex gap-4 items-center text-xl">
          <FaPhoneAlt className="text-2xl" />
          <a
            href="https://wa.me/9007062180"
            target="_blank"
            className="text-lg"
          >
            +91 9007062180
          </a>
        </div>
        <div className="flex justify-center gap-3 items-center text-xl ">
          <SiGooglemaps className="text-5xl lg:text-7xl " />
          <a
            href="https://maps.app.goo.gl/sReJCeoa4E7hC3ow7"
            target="_blank"
            className="text-lg"
          >
            {" "}
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </a>
        </div>
        <div className="flex gap-3 shadow-2xl">
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
  );
};

export default Contact;
