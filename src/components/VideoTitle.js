import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[170px] px-12 absolute text-white bg-gradient-to-r from-black pt-[20%] px-24">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        {/* <button className="bg-white text-black p-4 px-14 text-xl  rounded-lg  hover:bg-opacity-55 ">
          ▶Play
        </button>
        <button className="bg-gray-700 mx-2 text-white p-4 px-14 text-xl bg-opacity-50 rounded-lg ">
          <span className="flex justify-between">
          More Info
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default VideoTitle;
