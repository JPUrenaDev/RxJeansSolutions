import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { ModalW } from "../Modal/Modal";
import styled from "styled-components";
import { DeleteConfirmation } from "./DeleteConfirmation";

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: auto;

  display: flex;

  @media (min-width: 300px) {
    width: 100%;
  }
`;
export const BotonesTable = ({ datos = {}, Form = {}, onConfirm }) => {
  return (
    <Div>
      <ModalW>
        <ModalW.Open>
          <button className="bg-blue-500 text-white font-bold py-1 px-2 rounded">
            <FaEye className="sm:size-[30px] size-[10px]" />
          </button>
        </ModalW.Open>
        <ModalW.Windows>
          <Form datos={datos} mostrarBotones={true} deshabilitarInputs={true} />
        </ModalW.Windows>
      </ModalW>

      <ModalW>
        <ModalW.Open>
          <button className="bg-green-500 text-white font-bold py-1 px-2 rounded">
            <MdOutlineEdit className="sm:size-[30px] size-[10px]" />
          </button>
        </ModalW.Open>
        <ModalW.Windows>
          <Form datos={datos} />
        </ModalW.Windows>
      </ModalW>

      <ModalW>
        <ModalW.Open>
          <button className="bg-red-500 text-white font-bold py-1 px-2 rounded">
            <AiOutlineDelete className="sm:size-[30px] size-[10px]" />
          </button>
        </ModalW.Open>
        <ModalW.Windows>
          <DeleteConfirmation
            datos={datos}
            onConfirm={onConfirm}
          ></DeleteConfirmation>
        </ModalW.Windows>
      </ModalW>
    </Div>
  );
};
