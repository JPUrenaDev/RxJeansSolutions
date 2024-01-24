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
import { ProtectedRoute } from "./ui/ProtectedRoute";
import { Proovedores } from "./pages/Proveedores/Proovedores";
import { MantenimientoProductos } from "./pages/Productos/MantenimientoProductos";
import { Inventario } from "./pages/Inventario/Inventario";

import { NuevaOrden } from "./pages/Ventas/Productos";
import { HistoricoOrdenes } from "./pages/Ventas/HistoricoOrdenes";
import { Dashboard } from "./ui/Dashboard/Dashboard";
import { store } from "./app/store";
import { Provider } from "react-redux";

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
    element: (
      <ProtectedRoute>
        <Layout />,
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "clientes",
        element: <Clientes />,
      },
      {
        path: "mantenimientos-productos",
        element: <MantenimientoProductos />,
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
      {
        path: "proovedores",
        element: <Proovedores />,
      },
      {
        path: "inventario",
        element: <Inventario />,
      },

      {
        path: "nueva-orden",
        element: <NuevaOrden />,
      },

      {
        path: "historico-ordenes",
        element: <HistoricoOrdenes />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={query}>
        <Provider store={store}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={router} />
          <Toaster position="top-center" reverseOrder={false} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
