import React from "react";
import styled from "styled-components";
import ElementosDelHeader from "./ElementosDelHeader";

const HeaderStyle = styled.header`
  grid-column: 2/-1;
  background-color: rgb(99 102 241);
  height: "auto";
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <ElementosDelHeader />
      </HeaderStyle>
    </>
  );
};
