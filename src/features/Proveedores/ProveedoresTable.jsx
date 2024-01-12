import React from "react";
import { Table } from "../../ui/Table/Table";
import { useGetAllArs } from "../../customHooks/useGetAllArs";
import { useGetAllProveedores } from "../../customHooks/useGetAllProveedores";

export const ProveedoresTable = () => {
  const { data, isLoading } = useGetAllProveedores();
  console.log(data);

  return (
    <>
      <Table columns={"1fr 1f "}>
        <Table.Header>
          <h1></h1>
          <h1>Nombre Proveedor</h1>
        </Table.Header>

        <Table.Rows
          data={data}
          callback={(data) => {
            return <h1>{data.nombre}</h1>;
          }}
        ></Table.Rows>
      </Table>
    </>
  );
};
