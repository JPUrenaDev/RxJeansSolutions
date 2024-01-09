import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login } from "../services/apiAuth";
import toast from "react-hot-toast";
const queryClient = new QueryClient();

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate, isLoading = false } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      toast.success("Success");
      //console.log(data);
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["test"] });
    },

    onError: () => {
      toast.error("Usuario y/o contrasena incorrecta");
    },
  });

  return { mutate, isLoading };
};
