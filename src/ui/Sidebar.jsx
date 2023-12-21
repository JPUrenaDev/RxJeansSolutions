import React from "react";
import { SidebarItems } from "./SidebarItems";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SideBarStyles = styled.aside`
  grid-row: 1/-1;
`;
export const Sidebar = () => {
  return (
    <>
      <SideBarStyles className="bg-indigo-500 md:w-[258px] w-[100px] h-screen overflow-auto ">
        <SidebarItems />
      </SideBarStyles>
    </>
  );
};
