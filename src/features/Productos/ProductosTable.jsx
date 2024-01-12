import React from "react";
import { Table } from "../../ui/Table/Table";
import { getAllProducts } from "../../services/apiProductos";
import { useGetAllProduct } from "../../customHooks/useGetAllProducts";
import { usePagination } from "../../customHooks/usePagination";
import { PaginationContext } from "../../../context/paginationContext";
import { BotonesTable } from "../../ui/Table/BotonesTable";
import { ProductosForm } from "./ProductosForm";
import { ButtonMantenimientos } from "../../ui/Buttons/ButtonMantenimientos";
export const ProductosTable = () => {
  const { data: { productos, count: cantidadProductos } = {} } =
    useGetAllProduct();

  const { totalPages, TotalItems, firstElement, lastElement } = usePagination(
    cantidadProductos //esto lo estoy sacando de supabase (es el count de elementos.)
  );
  return (
    <>
      <ButtonMantenimientos Form={ProductosForm}>
        Agregar Producto
      </ButtonMantenimientos>

      <Table columns={"1fr 1fr 1fr 1fr 1fr 1fr 1fr"}>
        <Table.Header>
          <h1>Nombre Producto</h1>
          <h1>Precio</h1>
          <h1>Barcode</h1>
          <h1>Categoria</h1>
          <h1>Proveedor</h1>
          <h1>Imagen</h1>
          <span></span>
        </Table.Header>

        <Table.Rows
          data={productos}
          callback={(productos) => (
            <>
              <h1>{productos.nombre_producto}</h1>
              <h1>{productos.precio_unitario}</h1>
              <h1>{productos.barcode}</h1>
              <h1>{productos.categorias.nombre_categoria}</h1>
              <h1>{productos.proveedores.nombre}</h1>
              <img>{productos.imagen}</img>
              <BotonesTable datos={productos} Form={ProductosForm} />
            </>
          )}
        />
        <PaginationContext.Provider
          value={{
            totalPages,
            TotalItems,
            firstElement,
            lastElement,
          }}
        >
          <Table.Footer></Table.Footer>
        </PaginationContext.Provider>
      </Table>
    </>
  );
};
