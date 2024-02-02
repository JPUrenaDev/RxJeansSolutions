import React, { useEffect, useState } from "react";
import {
  decrementAmount,
  deleteItem,
} from "../Slicers/itemsToTheCheckoutSlicer";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { onIncrementAmountXitems } from "../Slicers/updateAmountOfItemsCheckoutSlicer";
import { incrementAmount } from "../Slicers/itemsToTheCheckoutSlicer";

const Img = styled.img`
  cursor: pointer;
`;
export const CheckoutItems = ({
  items: { NombreProducto, id, imagen, discount, stars, precio } = {},
}) => {
  const dispatch = useDispatch();

  const itemsFromSlice = useSelector((state) => state.addItems.items);
  const individualItem = itemsFromSlice?.find((item) => item.id == id);

  //the code bellow indicate or is used for inserting the amount of items at the moment the user wants to add another product after being in the checkout session.

  const deleteItems = () => {
    dispatch(deleteItem({ id }));
  };

  const onIncrementItenByOne = () => {
    dispatch(incrementAmount({ amount: individualItem.amount + 1, id }));
  };

  const onDecrementItemByOne = () => {
    dispatch(decrementAmount({ amount: individualItem.amount - 1, id }));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center p-4">
        <Img
          image={imagen}
          src={"." + imagen}
          className="w-[100px] h-[90px]"
        ></Img>
        <div className="flex flex-col">
          <label className="font-semibold">{NombreProducto}</label>
          <label>$ {precio}</label>
          <label>$ {discount}</label>
        </div>
      </div>
      <div>
        <button
          onClick={onIncrementItenByOne}
          type="button"
          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          +
        </button>
        <label>{individualItem.amount}</label>
        <button
          onClick={onDecrementItemByOne}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          -
        </button>

        <button
          onClick={deleteItems}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};
