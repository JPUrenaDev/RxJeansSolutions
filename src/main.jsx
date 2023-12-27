import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";

import { Layout } from "./ui/Layout/Layout.jsx";
import { NotFound } from "./ui/NotFound.jsx";
import { ClienteForm } from "./features/Clientes/ClienteForm.jsx";
import { Clientes } from "./pages/Clientes/Clientes.jsx";
import { Seguros } from "./pages/SegurosMedicos/Seguros.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "clientes",
        element: <Clientes />,
      },
      {
        path: "seguros",
        element: <Seguros />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
