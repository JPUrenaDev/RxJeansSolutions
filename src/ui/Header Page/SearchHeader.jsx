import React from "react";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";

export default function SearchHeader() {
  return (
    <div className=" flex items-center rounded-md mr-5">
      <div className="relative flex  items-center">
        <FaSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-300 pl-8 pr-2  py-2 border-none focus:outline-none rounded-md"
          style={{ backgroundColor: "#e5ecfa" }}
        />
      </div>
      <button
        className="ml-2 p-3 rounded-md"
        style={{ backgroundColor: "#e5ecfa" }}
      >
        <FaRegBell className="text-black" />
      </button>
      <button
        className="ml-2 p-3 rounded-md"
        style={{ backgroundColor: "#e5ecfa" }}
      >
        <SlEnvolope />
      </button>
    </div>
  );
}
