import React, { useContext } from "react";
import { TableContext } from "../../../context/tableContext";
import styled from "styled-components";
import { PaginationTable } from "./PaginationTable";
import { Spinner } from "../Spinner";

import { SearchWithFilters } from "./SearchWithFilters";
//la que estoy modifcando.
const RowsStyle = styled.div`
  display: grid;

  grid-template-columns: ${(props) => props.columns};

  padding: 10px;
  width: 100%;
  @media (min-width: 576px) {
    font-size: 13px;
  }
`;

const HeaderStyle = styled.div`
  display: grid;

  grid-template-columns: ${(props) => props.columns};
  background-color: #e8e8e8;
  padding: 10px;
  width: 100%;
  font-size: 12px;
  @media (min-width: 576px) {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    width: auto;
  }
  display: flex;
  gap: 5px;
  font-weight: bold;

  color: gray;
`;

const TableStyles = styled.div`
  @media (min-width: 576px) {
    width: auto;
  }
`;

const FooterStyle = styled.div`
  background-color: #f9fafb;
`;

export const Table = ({ children, columns, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="border-gray-400 border rounded-md pt-4 pl-5 h-[90px]">
        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-4 items-center">
            <h1 className="font-semibold">Todos los clientes</h1>{" "}
            <div className="border flex justify-center">
              <span className="px-3">59 clientes</span>
            </div>
          </div>
        </div>
      </div>
      <TableStyles className="border-gray-400 rounded-md border ">
        <TableContext.Provider value={columns}>
          {children}
        </TableContext.Provider>
      </TableStyles>
    </>
  );
};

const Header = ({ children }) => {
  const elementos = useContext(TableContext);
  return <HeaderStyle columns={elementos}>{children}</HeaderStyle>;
};

const Rows = ({ data, callback }) => {
  const elementos = useContext(TableContext); //COLUMNAS

  return (
    <RowsStyle className="text-blue divide-y  divide-grey" columns={elementos}>
      {data?.map(callback)}
    </RowsStyle>
  );
};

const Footer = () => {
  return (
    <FooterStyle className="px-4">
      <PaginationTable />
    </FooterStyle>
  );
};

Table.Header = Header;
Table.Rows = Rows;
Table.Footer = Footer;
