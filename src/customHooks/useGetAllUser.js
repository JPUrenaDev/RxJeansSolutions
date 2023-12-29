import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getAllClientes } from "../services/apiUsers";

const queryClient = new QueryClient();

export const useGetAllUsers = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: getAllClientes,
  });

  console.log(data, isLoading);

  return { isLoading, error, data };
};
