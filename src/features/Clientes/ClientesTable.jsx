import { useSearchParams } from "react-router-dom";

import { Table } from "../../ui/Table/Table";
import { BotonesTable } from "../../ui/Table/BotonesTable";
import { PaginationTable } from "../../ui/Table/PaginationTable";
import { ItemsTableStyle } from "../../helpers/stylesReutilizables";
import { ModalW } from "../../ui/Modal/Modal";
import { ITEMSXPAGE } from "../../helpers/itemsXPage";
import { PaginationContext } from "../../../context/paginationContext";
import { usePagination } from "../../customHooks/usePagination";

import { useGetAllUsers } from "../../customHooks/useGetAllUser";
import { Spinner } from "../../ui/Spinner";
import { ButtonMantenimientos } from "../../ui/Buttons/ButtonMantenimientos";
//AQUI DEBO PASAR LA FUNCION CON EL MAP, COMO DIJO JONAS.

const myArray = [
  { id: 1, nombre: "Jean", apellido: "Ureña", edad: 29 },
  { id: 2, nombre: "María", apellido: "López", edad: 35 },
  { id: 3, nombre: "Carlos", apellido: "Gómez", edad: 42 },
  { id: 4, nombre: "Ana", apellido: "Rodríguez", edad: 28 },
  { id: 5, nombre: "Luis", apellido: "Pérez", edad: 31 },
  { id: 6, nombre: "Laura", apellido: "Martínez", edad: 26 },
  { id: 7, nombre: "Javier", apellido: "Hernández", edad: 38 },
  { id: 8, nombre: "Sofía", apellido: "Díaz", edad: 45 },
  { id: 9, nombre: "Diego", apellido: "Fernández", edad: 33 },
  { id: 10, nombre: "Elena", apellido: "Ramírez", edad: 29 },
  { id: 11, nombre: "Alejandro", apellido: "Torres", edad: 36 },
  { id: 12, nombre: "Carmen", apellido: "Sánchez", edad: 40 },
  { id: 13, nombre: "Pablo", apellido: "Cruz", edad: 27 },
  { id: 14, nombre: "Isabel", apellido: "Vega", edad: 32 },
  { id: 15, nombre: "Antonio", apellido: "Jiménez", edad: 44 },
  { id: 16, nombre: "Marta", apellido: "Ortega", edad: 30 },
  { id: 17, nombre: "Raúl", apellido: "Molina", edad: 34 },
  { id: 18, nombre: "Beatriz", apellido: "Nuñez", edad: 41 },
  { id: 19, nombre: "Hugo", apellido: "Guerrero", edad: 25 },
  { id: 20, nombre: "Natalia", apellido: "Ruiz", edad: 37 },
];

export const ClientesTable = () => {
  const { data = [], isLoading } = useGetAllUsers();
  const { totalPages, TotalItems, firstElement, lastElement, ArrayPaginado } =
    usePagination(myArray, data, isLoading);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="flex justify-between ">
        <h1 className="font-semibold text-xl mb-[70px] tracking-wide">
          CLIENTES
        </h1>
        <ButtonMantenimientos> Agregar Nuevo Cliente</ButtonMantenimientos>
      </div>
      <Table loading={isLoading} columns="100px 1fr 1fr 1fr 1fr 1fr ">
        <Table.Header>
          <div></div>
          <div>Nombre</div>
          <div>Apellidos</div>
          <div>Edad</div>
          <div>Seguro Medico</div>
          <div></div>
        </Table.Header>

        <Table.Rows
          data={ArrayPaginado}
          callback={(clientes) => (
            <>
              <ItemsTableStyle>{clientes.id}</ItemsTableStyle>
              <ItemsTableStyle>{clientes.Nombres}</ItemsTableStyle>
              <ItemsTableStyle>{clientes.Apellidos}</ItemsTableStyle>
              <ItemsTableStyle>{clientes.Fecha_Nacimiento}</ItemsTableStyle>
              <ItemsTableStyle>{clientes.seguros.nombre_ars}</ItemsTableStyle>
              <BotonesTable />
            </>
          )}
        />

        <PaginationContext.Provider
          value={{
            firstElement,
            lastElement,
            TotalItems,
            totalPages,
            isLoading,
          }}
        >
          <Table.Footer></Table.Footer>
        </PaginationContext.Provider>
      </Table>
    </>
  );
};

/*
<ModalW>
      <ModalW.Open />
      <ModalW.Windows>
        <ReuTable /> //!ESTO ES UN EJEMPLO, LA TABLA NO VA AQUI.
      </ModalW.Windows>
    </ModalW>
*/
