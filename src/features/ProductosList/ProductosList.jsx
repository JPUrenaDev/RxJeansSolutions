import React, { useState } from "react";
import { RenderProducts } from "./RenderProducts";
import { Filters } from "../Filters/Filters";

const tempArrayProduct = [
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    value: "Gold Standard Whey Protein",
    discount: 5,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
    label: "Gold Standard Whey Protein",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 3,
    precio: 150,
    imagen: "./public/Amoxicilina-1-1200x600.png",
  },
  {
    id: 1,
    NombreProducto: "Ampicilina (amasa)",
    discount: 5,
    stars: 3,
    precio: 150,
    imagen: "./public/AMS053.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/Mockup-Creatina.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/Mockup-Creatina.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/Mockup-Creatina.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/Mockup-Creatina.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/microsoftteams-image_5_1.png",
  },
  {
    id: 1,
    NombreProducto: "Ampicilina",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/microsoftteams-image_5_1.png",
  },
  {
    id: 1,
    NombreProducto: "Listerine",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/ultraclean.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 30,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
];

const newArrayProduct = tempArrayProduct.map((product) => {
  return product.discount > 0
    ? {
        ...product,
        discount: Math.floor(Math.random() * (50 - 1 + 1) + 50),
      }
    : product;
});

export const ProductosList = () => {
  const [contador, setContador] = useState(1);
  const [setMyContador] = useState(0);
  const [itemsAddedToCheckout, setAddItemsToCheckout] = useState([]);
  const [busquedaFiltro, setBusquedaFiltro] = useState("");
  const filteredItems = newArrayProduct.filter((valor) => {
    return valor.NombreProducto.toLowerCase().includes(
      busquedaFiltro?.toLowerCase()
    );
  });

  return (
    <>
      <Filters
        data={tempArrayProduct}
        callback={(items) => {
          return {
            ...items,
            label: items.NombreProducto,
            value: items.NombreProducto,
          };
        }}
      />
      <input
        placeholder="pruebe"
        onChange={(e) => setBusquedaFiltro(e.target.value)}
      ></input>

      <span className="font-bold">{filteredItems.length} PRODUCTOS</span>
      <div className="flex flex-wrap  w-full gap-6 mt-5">
        {filteredItems.map((items) => {
          return (
            <RenderProducts
              key={items.id}
              items={items}
              setContador={setContador}
              contador={contador}
              setMyContador={setMyContador}
              setAddItemsToCheckout={setAddItemsToCheckout}
              itemsAddedToCheckout={itemsAddedToCheckout}
            />
          );
        })}
      </div>
    </>
  );
};
