import React from "react";
import { Table } from "../../ui/Table/Table";

export const InventarioTable = () => {
  return (
    <Table columns={"1fr 1fr 1fr 1fr"}>
      <Table.Header>
        <h1>Producto</h1>
        <h1>Cantidad Stock</h1>
        <h1>Fecha Vencimiento</h1>
        <h1>Categoria</h1>
      </Table.Header>
    </Table>
  );
};
