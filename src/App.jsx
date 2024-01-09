import { useState } from "react";
import { Sidebar } from "./ui/Sidebar/Sidebar";
import { QueryClient } from "@tanstack/react-query";
import { Layout } from "./ui/Layout/Layout";
import { NotFound } from "./ui/NotFound";
import { Clientes } from "./pages/Clientes/Clientes";
import { Seguros } from "./pages/SegurosMedicos/Seguros";
import { Empleados } from "./pages/Empleados/Empleados";
import { Categorias } from "./pages/Categorias/Categorias";
import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Login } from "./ui/login/Login";

const query = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 30000,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
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

function App() {
  return (
    <>
      <QueryClientProvider client={query}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
