import React, { useState } from "react";
import { RenderProducts } from "./RenderProducts";

const tempArrayProduct = [
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
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 0,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 0,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 0,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 0,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
  {
    id: 1,
    NombreProducto: "Gold Standard Whey Protein",
    discount: 0,
    stars: 3,
    precio: 150,
    imagen: "./public/proteinaWhey.png",
  },
  {
    id: 1,
    NombreProducto: "Ampicilina (amasa)",
    discount: 5,
    stars: 3,
    precio: 150,
    imagen: "./public/AMS053.png",
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

console.log(newArrayProduct);
export const ProductosList = ({ setContador, contador }) => {
  const [busquedaFiltro, setBusquedaFiltro] = useState("");
  console.log(busquedaFiltro);
  const [elementos, setElementosFiltrados] = useState([]);
  const valor = newArrayProduct.filter((valor) => {
    return valor.NombreProducto.toLowerCase().includes(
      busquedaFiltro?.toLowerCase()
    );
  });

  return (
    <>
      <input
        placeholder="purbea"
        onChange={(e) => setBusquedaFiltro(e.target.value)}
      ></input>
      <span className="font-bold">{valor.length} PRODUCTOS</span>
      <div className="flex flex-wrap  w-full gap-6">
        {valor.map((items) => {
          return (
            <RenderProducts
              key={Math.random()}
              items={items}
              setContador={setContador}
              contador={contador}
            />
          );
        })}
      </div>
    </>
  );
};
