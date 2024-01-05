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
import styled from "styled-components";

const LinkStyle = styled(Link)`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  width: 250px;
  padding: 8px;
  transition: all 0.3s; /* Agregando la transición aquí */
  &:hover {
    background-color: #408efd; /* Fondo azul al pasar el ratón sobre el enlace */
    border-radius: 0.375rem; /* Radio de borde redondeado al pasar el ratón sobre el enlace */
    color: #fff; /* Texto blanco al pasar el ratón sobre el enlace */
  }
`;

export const MantenimientoItemsSidebar = () => {
  return (
    <ul className="sideBarItems 0 flex  flex-col text-[17px] mb-5  ">
      <LinkStyle to={"categorias"} className={classNameItems}>
        <FaTableList />
        Categorias
      </LinkStyle>
      <LinkStyle to={"seguros"} className={classNameItems}>
        <FaAddressCard />
        Seguros Medicos
      </LinkStyle>
      <LinkStyle to={"clientes"} className={classNameItems}>
        <FaUserPlus />
        Clientes
      </LinkStyle>
      <LinkStyle to={"empleados"} className={classNameItems}>
        <FaClipboardUser />
        Empleados
      </LinkStyle>
      <LinkStyle to={"Dashboard"} className={classNameItems}>
        <FaHive />
        Productos
      </LinkStyle>
      <LinkStyle to={"Dashboard"} className={classNameItems}>
        <FaBasketShopping />
        Inventario
      </LinkStyle>
      <LinkStyle to={"Dashboard"} className={classNameItems}>
        <FaHospitalUser />
        Proveedores
      </LinkStyle>
    </ul>
  );
};
