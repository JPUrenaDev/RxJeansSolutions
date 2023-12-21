import React from "react";
import styled from "styled-components";
import { AvatarHeader } from "./Avatar";
import { SidebarItems } from "./SidebarItems";
import ItemsPanelHeader from "./ItemsPanelHeader";
const Header = styled.header`
  grid-column: 2/-1;
  background-color: rgb(99 102 241);
  height: 65px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const AppBar = () => {
  return (
    <>
      <Header>
        <ItemsPanelHeader />
      </Header>
    </>
  );
};
