import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import { useInsertUser } from "../services/apiUsers";

export const insertarUsuario = (handleClose) => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { mutate: createUser, isLoading: isCreating } = useMutation({
    mutationFn: useInsertUser,

    onSuccess: (data) => {
      toast.success("El Cliente se ha insertado correctamente");
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
      handleClose();
    },
    onError: () => {
      toast.error("error inserting data");
    },
  });

  return { createUser, isCreating };
};
