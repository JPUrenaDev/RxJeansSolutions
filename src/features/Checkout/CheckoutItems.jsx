import React from "react";

export const CheckoutItems = ({
  items: { NombreProducto, id, imagen, discount, stars, precio } = {},
}) => {
  console.log(imagen);
  return (
    <div className="flex items-center p-4">
      <img src={"." + imagen} className="w-[100px] h-[90px]"></img>
      <div className="flex flex-col">
        <label className="font-semibold">{NombreProducto}</label>
        <label>$ {precio}</label>
        <label>$ {discount}</label>
      </div>
    </div>
  );
};
