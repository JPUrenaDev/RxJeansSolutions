import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getAllClientes } from "../services/apiUsers";

const queryClient = new QueryClient();

export const useGetAllUsers = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["dataClientes"],
    queryFn: getAllClientes,
  });

  return { isLoading, error, data };
};
