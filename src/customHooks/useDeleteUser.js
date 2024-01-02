import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { deleteUser } from "../services/apiUsers";
import toast from "react-hot-toast";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteUserMutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      // Invalidate and refetch
      toast.success("Cliente eliminado correctamente");
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
    },
  });

  return { deleteUserMutate };
};
