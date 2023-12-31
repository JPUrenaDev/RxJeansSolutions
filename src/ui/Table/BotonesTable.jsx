import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { ModalW } from "../Modal/Modal";
import styled from "styled-components";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { ClienteForm } from "../../features/Clientes/ClienteForm";

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 2fr;
`;
export const BotonesTable = ({ cliente }) => {
  return (
    <Div>
      <ModalW>
        <ModalW.Open cliente={cliente}>
          <button>
            <FaEye size={30} />
          </button>
        </ModalW.Open>
        <ModalW.Windows>
          <ClienteForm cliente={cliente} />
        </ModalW.Windows>
      </ModalW>

      <ModalW>
        <ModalW.Open>
          <button>
            <MdOutlineEdit size={30} />
          </button>
        </ModalW.Open>
        <ModalW.Windows></ModalW.Windows>
      </ModalW>

      <ModalW>
        <ModalW.Open>
          <button>
            <AiOutlineDelete size={30} />
          </button>
        </ModalW.Open>
        <ModalW.Windows>
          <DeleteConfirmation />
        </ModalW.Windows>
      </ModalW>
    </Div>
  );
};
