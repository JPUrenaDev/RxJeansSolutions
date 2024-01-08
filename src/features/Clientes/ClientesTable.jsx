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
import { useState } from "react";

//AQUI DEBO PASAR LA FUNCION CON EL MAP, COMO DIJO JONAS.

import { IoCloudDownloadOutline } from "react-icons/io5";

export const ClientesTable = () => {
  const { isLoading, userData, count } = useGetAllUsers();

  const { totalPages, TotalItems, firstElement, lastElement } = usePagination(
    count, //esto lo estoy sacando de supabase (es el count de elementos.)
    isLoading
  );

  console.log(userData);

  const { deleteUserMutate } = useDeleteUser(userData?.id);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl mb-[70px] tracking-wide">
          CLIENTES
        </h1>
        <div className="flex gap-3">
          <button className="bg-transparent h-12  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py- px-4 border border-blue-500 hover:border-transparent rounded">
            <IoCloudDownloadOutline className="inline-block mr-2 " />
            Exportar PDF
          </button>
          <ButtonMantenimientos Form={ClienteForm}>
            + Nuevo Cliente
          </ButtonMantenimientos>
        </div>
      </div>
      {count >= 1 ? (
        <Table loading={isLoading} columns=" 1fr 1fr 1fr 1fr 1fr 1fr 1fr">
          <div>
            <Table.Header>
              <div>Nombre</div>
              <div>Apellidos</div>
              <div>Edad</div>
              <div>ARS</div>
              <div>Estatus</div>
              <div>Imagen</div>
              <div></div>
            </Table.Header>

            <Table.Rows
              data={userData}
              callback={(clientes) => (
                <>
                  <ItemsTableStyle>{clientes.Nombres}</ItemsTableStyle>
                  <ItemsTableStyle>{clientes.Apellidos}</ItemsTableStyle>
                  <ItemsTableStyle>{clientes.Fecha_Nacimiento}</ItemsTableStyle>
                  <ItemsTableStyle>
                    {clientes.seguros.nombre_ars}
                  </ItemsTableStyle>
                  <ItemsTableStyle>
                    <div className=" ">
                      <span>
                        {clientes.status ? (
                          <h1 className="w-[60px] rounded-lg p-1 flex justify-center bg-lime-500">
                            Activo
                          </h1>
                        ) : (
                          <h1 className="w-[110px] rounded-lg p-1 flex justify-center bg-red-700">
                            Deshabilitado
                          </h1>
                        )}
                      </span>
                    </div>
                  </ItemsTableStyle>
                  <ItemsTableStyle>
                    <img
                      className="w-[50px] h-[40px]"
                      src={clientes.imagen}
                      alt="bucket"
                    ></img>
                  </ItemsTableStyle>
                  <ItemsTableStyle>
                    <BotonesTable
                      datos={clientes}
                      Form={ClienteForm}
                      onConfirm={() => deleteUserMutate(clientes.id)}
                    />
                  </ItemsTableStyle>
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
