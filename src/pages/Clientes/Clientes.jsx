import React from "react";
import { ButtonMantenimientos } from "../../ui/Buttons/ButtonMantenimientos";

import { ClientesTable } from "../../features/Clientes/ClientesTable";
export const Clientes = () => {
  return (
    <>
      <div className="flex justify-between ">
        <h1 className="font-semibold text-xl mb-[70px] tracking-wide">
          CLIENTES
        </h1>
        <ButtonMantenimientos> Agregar Nuevo Cliente</ButtonMantenimientos>
      </div>
      <ClientesTable />
    </>
  );
};
