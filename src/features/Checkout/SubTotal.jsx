import React from "react";
import { useSelector } from "react-redux";

export const SubTotal = () => {
  const products = useSelector((state) => state.addItems.items);
  const totalValue = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.precio,
    0
  );

  return (
    <div className="bg-stone-200 w-[400px] h-[300px] text-center">
      <label className="text-[30px] font-semibold ">${totalValue}</label>
    </div>
  );
};
