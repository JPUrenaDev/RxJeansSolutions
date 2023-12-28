import React from "react";
import { ModalW } from "../Modal/Modal";
import { ClienteForm } from "../../features/Clientes/ClienteForm";

export const ButtonMantenimientos = ({ children }) => {
  return (
    <ModalW>
      <ModalW.Open>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold md:w-[140px]  px-2  h-20   rounded">
          {children}
        </button>
      </ModalW.Open>
      <ModalW.Windows>
        <ClienteForm />
      </ModalW.Windows>
    </ModalW>
  );
};
