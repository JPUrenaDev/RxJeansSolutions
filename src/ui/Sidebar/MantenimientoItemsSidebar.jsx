import React from "react";
import { Link } from "react-router-dom";
import { FaTableList } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaHospitalUser } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHive } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { classNameItems } from "../../../helper/HelperDesign/sideBarClassItems";
export const MantenimientoItemsSidebar = () => {
  return (
    <ul className="sideBarItems 0 flex ml-[-20px] flex-col text-[17px] mt-5 text-white ">
      <Link to={"Dashboard"} className={classNameItems}>
        <FaTableList />
        Categorias
      </Link>
      <Link to={"seguros"} className={classNameItems}>
        <FaAddressCard />
        Seguros Medicos
      </Link>
      <Link to={"clientes"} className={classNameItems}>
        <FaUserPlus />
        Clientes
      </Link>
      <Link to={"Dashboard"} className={classNameItems}>
        <FaClipboardUser />
        Empleados
      </Link>
      <Link to={"Dashboard"} className={classNameItems}>
        <FaHive />
        Productos
      </Link>
      <Link to={"Dashboard"} className={classNameItems}>
        <FaBasketShopping />
        Inventario
      </Link>
      <Link to={"Dashboard"} className={classNameItems}>
        <FaHospitalUser />
        Proveedores
      </Link>
    </ul>
  );
};
