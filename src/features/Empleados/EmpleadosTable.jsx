import React from "react";
import { usePagination } from "../../../../customHooks/usePagination";
import { ItemsTableStyle } from "../../helpers/stylesReutilizables";
import { BotonesTable } from "../../ui/Table/BotonesTable";
import { Table } from "../../ui/Table/Table";
import { PaginationContext } from "../../../context/paginationContext";
const myArray = [
  { id: 1, nombre: "Jean", apellido: "Ureña", edad: 29 },
  { id: 2, nombre: "María", apellido: "López", edad: 35 },
  { id: 3, nombre: "Carlos", apellido: "Gómez", edad: 42 },
  { id: 4, nombre: "Ana", apellido: "Rodríguez", edad: 28 },
  { id: 5, nombre: "Luis", apellido: "Pérez", edad: 31 },
  { id: 6, nombre: "Laura", apellido: "Martínez", edad: 26 },
  { id: 7, nombre: "Javier", apellido: "Hernández", edad: 38 },
];
export const EmpleadosTable = () => {
  const { totalPages, TotalItems, firstElement, lastElement, ArrayPaginado } =
    usePagination(myArray);
  return (
    <>
      <Table columns="100px 1fr 1fr 1fr 1fr ">
        <Table.Header>
          <div></div>
          <div>Nombre Empleado</div>
          <div>Correo Electronico</div>
          <div>Fecha Ingreso</div>
          <div></div>
        </Table.Header>

        <Table.Rows
          data={ArrayPaginado}
          callback={(clientes) => (
            <>
              <ItemsTableStyle>{clientes.id}</ItemsTableStyle>
              <ItemsTableStyle>{clientes.nombre}</ItemsTableStyle>
              <ItemsTableStyle>{clientes.apellido}</ItemsTableStyle>
              <ItemsTableStyle>{clientes.edad}</ItemsTableStyle>
              <BotonesTable />
            </>
          )}
        />

        <PaginationContext.Provider
          value={{ firstElement, lastElement, TotalItems, totalPages }}
        >
          <Table.Footer></Table.Footer>
        </PaginationContext.Provider>
      </Table>
    </>
  );
};
