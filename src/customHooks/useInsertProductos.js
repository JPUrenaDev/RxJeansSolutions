import supabase from "../services/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertProduct } from "../services/apiProductos";
import toast from "react-hot-toast";
export const useInsertProduct = () => {
  const queryClient = useQueryClient();

  const { mutate: addProductMutate } = useMutation({
    mutationFn: insertProduct,
    onSuccess: () => {
      toast.success("Producto insertado correctamente");
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["productos"] });
    },
    onSettled: () => {
      toast.error("Error al insertar el producto");
    },
  });

  return { addProductMutate };
};
