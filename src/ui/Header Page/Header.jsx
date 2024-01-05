import React from "react";
import styled from "styled-components";
import ElementosDelHeader from "./ElementosDelHeader";

const HeaderStyle = styled.header`
  grid-column: 2/-1;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = () => {
  return (
    <>
      <HeaderStyle className="border">
        <ElementosDelHeader />
      </HeaderStyle>
    </>
  );
};
