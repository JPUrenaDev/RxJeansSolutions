import { ProductosList } from "../../features/ProductosList/ProductosList";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Span = styled.span`
  position: absolute;
  left: 13px;
  top: 16px;
`;

const Button = styled.button`
  position: relative;
  border-radius: 9999px; /* Establece un radio suficientemente grande para hacer el botón redondeado */
  background-color: rgba(63, 94, 251, 0.25); /* Color de fondo con opacidad */
  width: 64px; /* Ancho del botón */
  height: 60px; /* Altura del botón */
  /* Otros estilos adicionales según sea necesario */
`;

const CantidadItemsCar = styled.span`
  position: absolute;
  background-color: red;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  top: 2px;
  right: 1px;
`;
export const NuevaOrden = () => {
  const products = useSelector((state) => state.addItems.items).length;
  return (
    <>
      <div className="flex justify-end">
        <Button>
          <CantidadItemsCar>{products}</CantidadItemsCar>
          <Span>
            <FaShoppingCart size={34} />
          </Span>
        </Button>
      </div>

      <ProductosList />
    </>
  );
};
