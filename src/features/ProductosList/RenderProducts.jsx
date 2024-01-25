import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { RiStarSLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { RxHeartFilled } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../Slicers/itemsToTheCheckoutSlicer";

const Div = styled.div`
  position: relative;
  display: flex;
  width: 200px;
  height: 200px;
  gap: 10px;
`;

const Descuento = styled.span`
  position: absolute;
  width: 52px;
  height: 25px;
  top: 1px;
  background-color: red;
  text-align: center;
  color: white;

  padding-bottom: 18px;
`;

const SaveItemContainer = styled.div`
  position: absolute;
  right: 10px;
`;

const ViewDetailsProduct = styled.div`
  position: absolute;
  right: 10px;
`;

const Button = styled.button``;
export const RenderProducts = ({
  items,
  setStyleWhenAddProduct,
  styleWhenAddAProduct,
}) => {
  const [saveHeartColor, setSaveHeartColor] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.addItems.items);
  const idProductToBasket = products.map((items) => items.id);
  const [selectedProduct, setSelectedProduct] = useState(
    idProductToBasket.includes(items.id) ? true : false
  );
  const [valor, setValor] = useState(0);

  useEffect(() => {
    setStyleWhenAddProduct(products);
  }, [products, setStyleWhenAddProduct, styleWhenAddAProduct]);

  const onAddCheckout = () => {
    dispatch(addItem(items));
  };

  const onDeleteCheckout = () => {
    dispatch(deleteItem(items));
  };

  const onChangeHeartColor = () => {
    setSaveHeartColor(!saveHeartColor);
    setValor(valor + 1);
  };

  const stars = Array.from({ length: items.stars }, (v, i) => i);

  return (
    <>
      <div className="mb-3">
        <Div className="bg-gray-300 cursor-pointer  hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-150 ">
          <img src={items.imagen}></img>
          {items?.discount > 0 && (
            <>
              <Descuento>
                <span>{items?.discount}%</span>
              </Descuento>
              <SaveItemContainer>
                <button onClick={onChangeHeartColor} className="mt-1">
                  {saveHeartColor ? (
                    <RxHeartFilled size={20} />
                  ) : (
                    <CiHeart size={20} />
                  )}
                </button>
              </SaveItemContainer>
            </>
          )}
        </Div>
        <h2 className="text-md font-bold">{items.NombreProducto}</h2>
        <div className="flex gap-3">
          {stars.map((stars) => (
            <div>⭐</div>
          ))}
        </div>

        <div className="flex flex-col">
          <span>{"$" + items.precio}</span>
          <Button
            onClick={() => {
              setSelectedProduct(!selectedProduct);
              !selectedProduct ? onAddCheckout() : onDeleteCheckout();
            }}
            className={`w-[210px] h-[45px]  ${
              idProductToBasket.includes(items.id)
                ? "bg-red-700 text-white"
                : "bg-white"
            } font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-indigo-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center `}
          >
            {idProductToBasket.includes(items.id)
              ? "Quitar del carrito"
              : "Agregar al carrito"}
          </Button>
        </div>
      </div>
    </>
  );
};
