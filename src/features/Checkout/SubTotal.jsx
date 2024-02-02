import React from "react";
import { useSelector } from "react-redux";

export const SubTotal = () => {
  const itemsFromSlice = useSelector((state) => state.addItems.items);
  const totalPrice = itemsFromSlice?.reduce((acc, currentValue) => {
    return acc + currentValue.precio * currentValue.amount;
  }, 0);

  return (
    <div className="bg-stone-200 w-[400px] h-[300px] text-center">
      <label className="text-[30px] font-semibold ">${totalPrice}</label>
    </div>
  );
};
