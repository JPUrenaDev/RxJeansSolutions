import React from "react";
import { FaSearch } from "react-icons/fa";

//esto debe recibir un arreglo con las opciones, tanto en el sort como en los otros filtros.
export const SearchWithFilters = () => {
  return (
    <>
      <div className="relative flex  items-center gap-5 ">
        <FaSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-300 pl-8 pr-2  py-2 border focus:outline-none rounded-md "
          style={{ backgroundColor: "#f9fafb" }}
        />
      </div>
      <div className="flex gap-3 items-center">
        <button className="border bg-transparent  w-[100px] text-blue-500 px-4 py-1 rounded hover:bg-violet-600  focus:outline-none focus:ring focus:ring-violet-300">
          Todos
        </button>

        <button className="border bg-transparent  w-[100px] text-blue-500 px-4 py-1 rounded hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300">
          Activos
        </button>
        <button className="border bg-transparent  w-[100px] text-blue-500 px-4 py-1 rounded hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300">
          inactivos
        </button>

        <div className="mr-4">
          <select
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </>
  );
};
