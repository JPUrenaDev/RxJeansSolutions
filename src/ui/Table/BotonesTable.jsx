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
  gap: 2fr;
  max-width: auto;
`;
export const BotonesTable = ({ datos, Form, onConfirm }) => {
  return (
    <Div>
      <ModalW>
        <ModalW.Open>
          <button>
            <FaEye size={30} />
          </button>
        </ModalW.Open>
        <ModalW.Windows>
          <Form datos={datos} />
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
          <DeleteConfirmation
            datos={datos}
            onConfirm={onConfirm}
          ></DeleteConfirmation>
        </ModalW.Windows>
      </ModalW>
    </Div>
  );
};
