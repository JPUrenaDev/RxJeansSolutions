import { useSearchParams } from "react-router-dom";

import { Table } from "../../ui/Table/Table";
import { BotonesTable } from "../../ui/Table/BotonesTable";

import { ItemsTableStyle } from "../../helpers/stylesReutilizables";

import { PaginationContext } from "../../../context/paginationContext";
import { usePagination } from "../../customHooks/usePagination";

import { useGetAllUsers } from "../../customHooks/useGetAllUser";
import { Spinner } from "../../ui/Spinner";
import { ButtonMantenimientos } from "../../ui/Buttons/ButtonMantenimientos";
import { ClienteForm } from "./ClienteForm";
import { useDeleteUser } from "../../customHooks/useDeleteUser";
//AQUI DEBO PASAR LA FUNCION CON EL MAP, COMO DIJO JONAS.

export const ClientesTable = () => {
  const { data = [], isLoading } = useGetAllUsers();
  const { totalPages, TotalItems, firstElement, lastElement, ArrayPaginado } =
    usePagination(data, isLoading);

  const { deleteUserMutate } = useDeleteUser(data.id);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl mb-[70px] tracking-wide">
          CLIENTES
        </h1>
        <ButtonMantenimientos Form={ClienteForm}>
          {" "}
          Agregar Nuevo Cliente
        </ButtonMantenimientos>
      </div>
      {data.length >= 1 ? (
        <Table loading={isLoading} columns="100px 1fr 1fr 1fr 1fr 1fr ">
          <div>
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
                  <ItemsTableStyle>
                    {clientes.seguros.nombre_ars}
                  </ItemsTableStyle>
                  <BotonesTable
                    datos={clientes}
                    Form={ClienteForm}
                    onConfirm={() => deleteUserMutate(clientes.id)}
                  />
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
          </div>
        </Table>
      ) : (
        <h1>NO HAY CLIENTES REGISTRADOS</h1>
      )}
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
