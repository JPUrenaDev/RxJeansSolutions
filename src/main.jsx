import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";

import { Layout } from "./ui/Layout/Layout.jsx";
import { NotFound } from "./ui/NotFound.jsx";
import { ClienteForm } from "./features/Clientes/ClienteForm.jsx";
import { Clientes } from "./pages/Clientes/Clientes.jsx";
import { Seguros } from "./pages/SegurosMedicos/Seguros.jsx";
import { Empleados } from "./pages/Empleados/Empleados.jsx";
import { Categorias } from "./pages/Categorias/Categorias.jsx";

const queryClient = new QueryClient();

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
      {
        path: "empleados",
        element: <Empleados />,
      },
      {
        path: "categorias",
        element: <Categorias />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
