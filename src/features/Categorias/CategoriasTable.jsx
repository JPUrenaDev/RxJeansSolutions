import React from "react";
import { ItemsTableStyle } from "../../helpers/stylesReutilizables";
import { Table } from "../../ui/Table/Table";
import { BotonesTable } from "../../ui/Table/BotonesTable";
import { ClienteForm } from "../Clientes/ClienteForm";
import { usePagination } from "../../customHooks/usePagination";
import { PaginationContext } from "../../../context/paginationContext";
import { ButtonMantenimientos } from "../../ui/Buttons/ButtonMantenimientos";
import { useGetAllCategories } from "../../customHooks/useGetAllCategories";
import { CategoriaForm } from "./CategoriaForm";
import { reducirTexto } from "../../helpers/reducirTexto";

export const CategoriasTable = () => {
  const { data: Categorias = [] } = useGetAllCategories();
  const { totalPages, TotalItems, firstElement, lastElement, ArrayPaginado } =
    usePagination(Categorias);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl mb-[70px] tracking-wide">
          Categoriass
        </h1>
        <ButtonMantenimientos Form={CategoriaForm}>
          {" "}
          Agregar Nueva Categoria
        </ButtonMantenimientos>
      </div>

      <Table columns={"50px 1fr 1fr 1fr 1fr 1fr"}>
        <Table.Header>
          <div></div>
          <div>Nombre Categoria</div>
          <div>Descripcion</div>
          <div>Estado Categoria</div>
          <div>Image</div>
          <div></div>
        </Table.Header>
        <Table.Rows
          callback={(categoria) => (
            <>
              <ItemsTableStyle>{categoria.id}</ItemsTableStyle>
              <ItemsTableStyle>{categoria.nombre_categoria}</ItemsTableStyle>
              <ItemsTableStyle>
                {reducirTexto(categoria.descripcion)}
              </ItemsTableStyle>
              <ItemsTableStyle>
                {JSON.stringify(categoria.estadoCategoria)
                  ? "activo"
                  : "inactivo"}
              </ItemsTableStyle>
              <ItemsTableStyle>{categoria.imagen}</ItemsTableStyle>
              <BotonesTable datos={categoria} Form={ClienteForm} />
            </>
          )}
          data={Categorias}
        />
        <PaginationContext.Provider
          value={{
            firstElement,
            lastElement,
            TotalItems,
            totalPages,
          }}
        >
          <Table.Footer></Table.Footer>
        </PaginationContext.Provider>
      </Table>
    </>
  );
};
