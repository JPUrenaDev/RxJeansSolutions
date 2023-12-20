import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GrDashboard } from "react-icons/gr";
import { FcSalesPerformance } from "react-icons/fc";
import { FcDataConfiguration } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FaChartPie } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaWhmcs } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa6";
import { MantenimientoItems } from "./MantenimientoItems";
import { classNameItems } from "../../helper/HelperDesign/sideBarClassItems";

const sideBarItems = [
  "Dashboard",
  "Ventas",
  "Ventas",

  "Historial",

  "Mantenimientos",
  "Configuracion",
];

export const SidebarItems = () => {
  const [despliegueDropDown, setDespliegueDropDown] = useState("");
  return (
    <aside className="bg-indigo-500 w-[258px]  h-screen overflow-auto ">
      <div className="flex flex-col items-center">
        <img src="./public/logo-Farmacia.png " className="h-[100px]" />
        <h1 className="text-center  pt-6 text-white">RxJeansSolutions</h1>
        <hr className="h-px my-8 w-[200px] mb-7  bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <nav>
        <ul className="sideBarItems 0 flex flex-col gap-y-[20px] text-[15px]  text-white ml-4 ">
          <Link to={"Dashboard"} className={classNameItems}>
            <FaChartPie size={26} />
            <span>Dashboard</span>
          </Link>

          <Link to={"Ventas"} className={classNameItems}>
            <FaMoneyBillTransfer size={26} />
            <span>Ventas</span>
          </Link>

          <Link className={classNameItems}>
            <FaWhmcs size={26} />
            <span>Configuración</span>
          </Link>

          <div className="flex flex-col items-center">
            <hr className="h-px my-8 w-[200px] mb-4   bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <button
              className="flex hover:bg-violet-600 w-full items-center gap-[30px] p-3  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
              onClick={() => setDespliegueDropDown(!despliegueDropDown)}
            >
              <div className="flex gap-3">
                <FaWrench size={26} />
                <span>Mantenimientos</span>
              </div>
            </button>
            {despliegueDropDown && <MantenimientoItems />}
          </div>
        </ul>
      </nav>
    </aside>
  );
};
