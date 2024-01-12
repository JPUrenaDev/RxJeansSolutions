import React, { useState } from "react";
import { Link } from "react-router-dom";
//!ESTA VERSION ES LA COPIA
import { FaChartPie } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaWhmcs } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa6";
import { MantenimientoItemsSidebar } from "./MantenimientoItemsSidebar";
import { classNameItems } from "../../../helper/HelperDesign/sideBarClassItems";
import styled from "styled-components";
import { ElementosDelSidebar } from "./ElementosDelSidebar";
import { RxDashboard } from "react-icons/rx";
import { TbBusinessplan } from "react-icons/tb";
import { ToggleItemsButton } from "./ToggleItemsButton";
import { toggleButtonClasses } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const SideBarStyles = styled.aside`
  grid-row: 1/-1;
`;

const LinkStyle = styled(Link)`
  display: flex;
  gap: 20px;
  margin-bottom: 4px;
  width: 200px;
  padding: 8px;
  font-size: 14px;

  transition: all 0.3s; /* Agregando la transición aquí */
  &:hover {
    background-color: #408efd; /* Fondo azul al pasar el ratón sobre el enlace */
    border-radius: 0.375rem; /* Radio de borde redondeado al pasar el ratón sobre el enlace */
    color: #fff; /* Texto blanco al pasar el ratón sobre el enlace */
  }
`;

const TextItemsStyle = styled.span`
  font-weight: bold;
`;

const Div = styled.div`
  grid-row: 1/-1;
  background-color: white;
  border-width: 1px;
`;
export const Sidebar = () => {
  return (
    <>
      <Div className="w-full  pl-3 ">
        <aside>
          <div className="mb-7 mt-4 w-[200px] ">
            <img src="./public/logo-page.png" />
          </div>
          <div className="w-[170px] mb-3">
            <img src="./public/logo-page-2.png" />
          </div>
          <nav className="pl-2">
            <ToggleItemsButton>
              <ToggleItemsButton.TriggerOptions
                title={"Menu"}
                ButtonOpened={IoIosArrowForward}
                ButtonNotOpened={IoIosArrowDown}
              ></ToggleItemsButton.TriggerOptions>

              <ToggleItemsButton.ShowOptions>
                <ul className=" text-black">
                  <LinkStyle to={"Dashboard"}>
                    <RxDashboard size={20} />
                    <TextItemsStyle>Dashboard</TextItemsStyle>
                  </LinkStyle>

                  <LinkStyle to={"Ventas"}>
                    <TbBusinessplan size={20} />
                    <TextItemsStyle>Ventas</TextItemsStyle>
                  </LinkStyle>

                  <LinkStyle>
                    <FaWhmcs size={20} />
                    <TextItemsStyle>Configuración</TextItemsStyle>
                  </LinkStyle>

                  <LinkStyle>
                    <FaWhmcs size={20} />
                    <TextItemsStyle>Ordenes</TextItemsStyle>
                  </LinkStyle>
                </ul>
              </ToggleItemsButton.ShowOptions>
            </ToggleItemsButton>
            <hr className="mb-4"></hr>
            <ToggleItemsButton>
              <ToggleItemsButton.TriggerOptions
                title={"Mantenimientos"}
                ButtonOpened={IoIosArrowForward}
                ButtonNotOpened={IoIosArrowDown}
              ></ToggleItemsButton.TriggerOptions>
              <ToggleItemsButton.ShowOptions>
                <MantenimientoItemsSidebar />
              </ToggleItemsButton.ShowOptions>
            </ToggleItemsButton>
          </nav>
        </aside>
      </Div>
    </>
  );
};
