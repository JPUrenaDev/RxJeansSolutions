import React from "react";
import { Table } from "../../ui/Table/Table";
import { ItemsTableStyle } from "../../helpers/stylesReutilizables";
import { BotonesTable } from "../../ui/Table/BotonesTable";
import { useSearchParams } from "react-router-dom";
import { usePagination } from "../../customHooks/usePagination";
import { PaginationContext } from "../../../context/paginationContext";
import { useGetAllArs } from "../../customHooks/useGetAllArs";
import { SegurosForm } from "./SegurosForm";
import { ButtonMantenimientos } from "../../ui/Buttons/ButtonMantenimientos";

export const SegurosTable = () => {
  const { data: seguros = [], isLoading } = useGetAllArs();

  console.log(seguros);
  const { totalPages, TotalItems, firstElement, lastElement, ArrayPaginado } =
    usePagination(seguros);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl mb-[70px] tracking-wide">
          SEGUROS MEDICOS
        </h1>
        <ButtonMantenimientos Form={SegurosForm}>
          {" "}
          Agregar Nueva ARS
        </ButtonMantenimientos>
      </div>
      <Table columns={"100px 4fr 1fr "}>
        <Table.Header>
          <div></div>
          <div>Nombre ARS</div>
          <div></div>
        </Table.Header>

        <Table.Rows
          data={seguros}
          callback={(ARS) => (
            <>
              <ItemsTableStyle>{ARS.id}</ItemsTableStyle>
              <ItemsTableStyle>{ARS.nombre_ars}</ItemsTableStyle>
              <BotonesTable datos={ARS} Form={SegurosForm} />
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
