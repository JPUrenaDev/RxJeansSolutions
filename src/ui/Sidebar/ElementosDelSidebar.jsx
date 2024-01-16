import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaChartPie } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaWhmcs } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa6";
import { MantenimientoItemsSidebar } from "./MantenimientoItemsSidebar";
import { classNameItems } from "../../../helper/HelperDesign/sideBarClassItems";

export const ElementosDelSidebar = () => {
  const [despliegueDropDown, setDespliegueDropDown] = useState("");
  return (
    <aside>
      <div className="flex flex-col items-center">
        <img src="./public/logo-Farmacia.png " className="h-[100px]" />
        <h1 className="text-center  pt-6 text-white">RxJeansSolutions</h1>
        <hr className="h-px my-8 md:w-auto w-auto mb-7  bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <nav>
        <ul className="sideBarItems  flex flex-col md:gap-y-[20px]  md:text-[15px] text-[9px] ml-3  text-white  ">
          <Link to={"Dashboard"} className={classNameItems}>
            <FaChartPie size={26} />
            <span>Dashboard</span>
          </Link>

          <Link className={classNameItems}>
            <FaWhmcs size={26} />
            <span>Configuración</span>
          </Link>

          <Link className={classNameItems}>
            <FaWhmcs size={26} />
            <span>Ordenes</span>
          </Link>

          <div className="flex flex-col items-center">
            <hr className="h-px my-8 md:w-[200px] w-[90px] mb-7  bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <button
              className="flex hover:bg-violet-600  md:w-full items-center gap-[30px] p-3  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
              onClick={() => setDespliegueDropDown(!despliegueDropDown)}
            >
              <div className="flex gap-3">
                <FaWrench size={26} />
                <span>Mantenimientos</span>
              </div>
            </button>
            {despliegueDropDown && <MantenimientoItemsSidebar />}
          </div>
        </ul>
      </nav>
    </aside>
  );
};
