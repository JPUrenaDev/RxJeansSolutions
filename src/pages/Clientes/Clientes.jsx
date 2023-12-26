import React from "react";

import { ClientesTable } from "../../features/Clientes/ClientesTable";
export const Clientes = () => {
  return (
    <>
      <h1 className="font-semibold text-xl mb-[70px] tracking-wide">
        CLIENTES
      </h1>
      <ClientesTable />
    </>
  );
};
