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
    id: 2,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 3,
    precio: 150,
    imagen: "./public/Amoxicilina-1-1200x600.png",
  },
  {
    id: 3,
    NombreProducto: "Ampicilina (amasa)",
    discount: 5,
    stars: 3,
    precio: 150,
    imagen: "./public/AMS053.png",
  },
  {
    id: 4,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
  {
    id: 5,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/Mockup-Creatina.png",
  },
  {
    id: 6,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/Mockup-Creatina.png",
  },
  {
    id: 7,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/Mockup-Creatina.png",
  },
  {
    id: 8,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/Mockup-Creatina.png",
  },
  {
    id: 9,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/microsoftteams-image_5_1.png",
  },
  {
    id: 10,
    NombreProducto: "Ampicilina",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/microsoftteams-image_5_1.png",
  },
  {
    id: 11,
    NombreProducto: "Listerine",
    discount: 5,
    stars: 4,
    precio: 150,
    imagen: "./public/ultraclean.png",
  },
  {
    id: 12,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 30,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
  {
    id: 22,
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
  const [styleWhenAddAProduct, setStyleWhenAddProduct] = useState([]);
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
        placeholder="prueba"
        onChange={(e) => setBusquedaFiltro(e.target.value)}
      ></input>

      <span className="font-bold">{filteredItems.length} PRODUCTOS</span>
      <div className="flex flex-wrap  w-full gap-6 mt-5">
        {filteredItems.map((items) => {
          return (
            <RenderProducts
              styleWhenAddAProduct={styleWhenAddAProduct}
              setStyleWhenAddProduct={setStyleWhenAddProduct}
              key={items.id}
              items={items}
            />
          );
        })}
      </div>
    </>
  );
};
