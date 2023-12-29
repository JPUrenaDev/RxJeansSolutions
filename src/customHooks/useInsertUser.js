import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useInsertUser } from "../services/apiUsers";
const queryClient = new QueryClient();

export const insertarUsuario = () => {
  const mutation = useMutation({
    mutationFn: useInsertUser,
    onSuccess: (data) => {
      toast.success("new cabin successfully created");
      toast.success("Successfully created!");
      queryClient.invalidateQueries({ queryKey: ["repoData"] });
    },
  });

  return { mutation };
};
