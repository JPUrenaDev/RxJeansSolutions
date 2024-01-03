import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { updateUser } from "../services/apiUsers";
import toast from "react-hot-toast";
export const useUpdateUser = (handleClose) => {
  const queryClient = useQueryClient();
  const { mutate: actualizarUsuario } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
      toast.success("Cliente actualizado correctamente");
      handleClose();
    },
  });
  return { actualizarUsuario };
};
