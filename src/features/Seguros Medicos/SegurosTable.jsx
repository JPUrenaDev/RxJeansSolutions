import React from "react";
import { Table } from "../../ui/Table/Table";
import { ItemsTableStyle } from "../../helpers/stylesReutilizables";
import { BotonesTable } from "../../ui/Table/BotonesTable";
import { useSearchParams } from "react-router-dom";
import { usePagination } from "../../../../customHooks/usePagination";
import { PaginationContext } from "../../../context/paginationContext";

const myArray = [
  { id: 1, NombreArs: "Ars Futuro" },
  { id: 2, NombreArs: "Ars Humano" },
  { id: 3, NombreArs: "Ars Palic" },
  { id: 4, NombreArs: "Ars XYZ" },
  { id: 5, NombreArs: "Ars ABC" },
  { id: 6, NombreArs: "Ars 123" },
  { id: 7, NombreArs: "Ars Random" },
  { id: 8, NombreArs: "Ars Nuevo" },
  { id: 9, NombreArs: "Ars Único" },
];
export const SegurosTable = () => {
  const { totalPages, TotalItems, firstElement, lastElement, ArrayPaginado } =
    usePagination(myArray);
  return (
    <>
      <Table columns={"100px 4fr 1fr "}>
        <Table.Header>
          <div></div>
          <div>Nombre ARS</div>
          <div></div>
        </Table.Header>

        <Table.Rows
          data={ArrayPaginado}
          callback={(ARS) => (
            <>
              <ItemsTableStyle>{ARS.id}</ItemsTableStyle>
              <ItemsTableStyle>{ARS.NombreArs}</ItemsTableStyle>
              <BotonesTable />
            </>
          )}
        />
        <PaginationContext.Provider
          value={{ firstElement, lastElement, TotalItems, totalPages }}
        >
          <Table.Footer />
        </PaginationContext.Provider>
      </Table>
    </>
  );
};
