import { useMutation, QueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import { useInsertUser } from "../services/apiUsers";
const queryClient = new QueryClient();
export const insertarUsuario = (handleClose) => {
  const mutation = useMutation({
    mutationFn: useInsertUser,
    onSuccess: (data) => {
      toast.success("El Cliente se ha insertado correctamente");
      queryClient.invalidateQueries();
      //queryClient.invalidateQueries({ queryKey: ["dataClientes"] });
      handleClose();
    },
    onError: () => {
      toast.error("error inserting data");
    },
  });

  return { mutation };
};
