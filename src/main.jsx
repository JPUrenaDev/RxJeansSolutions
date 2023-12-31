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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
