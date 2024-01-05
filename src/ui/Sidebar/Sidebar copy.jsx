import React from "react";

import styled from "styled-components";
import { ElementosDelSidebar } from "./ElementosDelSidebar";

const SideBarStyles = styled.aside`
  grid-row: 1/-1;
`;
export const Sidebar = () => {
  return (
    <>
      <SideBarStyles className="bg-indigo-500 md:w-auto w-auto h-screen overflow-auto ">
        <ElementosDelSidebar />
      </SideBarStyles>
    </>
  );
};
