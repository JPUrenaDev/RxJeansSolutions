import React, { useState } from "react";
import { CheckoutItems } from "./CheckoutItems";
import { SubTotal } from "./SubTotal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const products = useSelector((state) => state.addItems.items);
  const navigate = useNavigate();
  //global state
  const [cantidadItemsCheckout, setCantidadItemsCheckout] = useState([]);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Go back</span>
      </button>

      <div className="flex justify-between">
        <div className="flex flex-col w-[1200px]">
          {products.map((items) => {
            return (
              <CheckoutItems
                setCantidadItemsCheckout={setCantidadItemsCheckout}
                cantidadItemsCheckout={cantidadItemsCheckout}
                key={items.id}
                items={items}
              />
            );
          })}
        </div>
        <SubTotal />
      </div>
    </>
  );
};
