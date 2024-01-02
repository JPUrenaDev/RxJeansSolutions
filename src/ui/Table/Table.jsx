import React, { useContext } from "react";
import { TableContext } from "../../../context/tableContext";
import styled from "styled-components";
import { PaginationTable } from "./PaginationTable";
import { Spinner } from "../Spinner";

const RowsStyle = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  background-color: white;

  width: auto;
`;

const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  background-color: #f9fafb;
  padding: 10px;
  font-weight: bold;
`;

const TableStyles = styled.div`
  width: auto;
`;

const FooterStyle = styled.div`
  background-color: #f9fafb;
  width: auto;
`;

export const Table = ({ children, columns, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <TableStyles className="border-2 border-gray">
      <TableContext.Provider value={columns}>{children}</TableContext.Provider>
    </TableStyles>
  );
};

const Header = ({ children }) => {
  const elementos = useContext(TableContext);
  return (
    <HeaderStyle className="  border-b-4 border-slate-300" columns={elementos}>
      {children}
    </HeaderStyle>
  );
};

const Rows = ({ data, callback }) => {
  const elementos = useContext(TableContext); //COLUMNAS
  return (
    <RowsStyle className="divide-y  divide-slate-300" columns={elementos}>
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
