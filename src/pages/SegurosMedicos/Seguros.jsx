import React from "react";
import { ButtonMantenimientos } from "../../ui/Buttons/ButtonMantenimientos";
import { SegurosTable } from "../../features/Seguros Medicos/SegurosTable";

export const Seguros = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl mb-[70px] tracking-wide">
          SEGUROS MEDICOS
        </h1>
        <ButtonMantenimientos> Agregar Nueva ARS</ButtonMantenimientos>
      </div>
      <SegurosTable />
    </>
  );
};
