
import RoomCard from "../RoomCard";
import "./Room.css";


function Rooms() {

  const rooms = [
    {
      id: 1,
      img: "https://www.kingsukhguesthouse.com/assets/small.jpg",
      name: "Cozy Heaven Room",
      desc: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "1000",
    },
    {
      id: 2,
      img: "https://www.kingsukhguesthouse.com/assets/large.jpg",
      name: "Spacious Serenity Suite",
      desc: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: "1500",
    },
  ];

  
  
 

  return (
    <div
      className="h-screen  px-[20px] lg:px-[200px] mt-[20%] lg:mt-[1%] "
      id="rooms"
    >
      <p className="room_header ">OUR LIVING ROOM</p>
      <h2 className="text-5xl hidden lg:block font-bold tracking-widest mt-4 mb-4">
        The Most Memorable Rest <br />
        Time Starts Here.
      </h2>
      <h2 className="sm:hidden text-3xl  font-bold tracking-widest mt-2 mb-4">
        The Most <br /> Memorable Rest <br />
        Time Starts Here.
      </h2>

      <div
      
      className="flex flex-col lg:flex-row gap-8 mt-12 lg:mt-20 ">
        <RoomCard rooms={rooms} />
      </div>
    </div>
  );
}

export default Rooms;
