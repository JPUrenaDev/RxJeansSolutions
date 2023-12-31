import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import styled from "styled-components";
import { Header } from "../Header Page/Header";
const Section = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: #f9fafb;
  padding: 4rem 4.8rem 6.4rem;
  grid-column: 2/-1;
  grid-row: 2/-1;

  overflow: scroll; //LO QUE HACE ESTO ES QUE EL COMPONENTE QUE CONTENGA ESTO O LOS COMPONENTES,
  //TODO LO OTRO SE QUEDARA ESTATICO, ESTE ES EL UNICO QUE SE MOVERA.
`;

export const Layout = () => {
  return (
    <>
      <Section>
        <Header />
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </Section>
    </>
  );
};
