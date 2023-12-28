import React from "react";
import { EmpleadosTable } from "../../features/Empleados/EmpleadosTable";
import { ButtonMantenimientos } from "../../ui/Buttons/ButtonMantenimientos";

export const Empleados = () => {
  return (
    <>
      <div className="flex justify-between ">
        <h1 className="font-semibold text-xl mb-[70px] tracking-wide">
          EMPLEADOS
        </h1>
        <ButtonMantenimientos> Agregar Nuevo Empleado</ButtonMantenimientos>
      </div>
      <EmpleadosTable />
    </>
  );
};
