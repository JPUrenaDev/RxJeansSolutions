import { useQuery } from "@tanstack/react-query";
import { getAllClientes } from "../services/apiUsers";

export const useGetAllUsers = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["clientes"],
    queryFn: getAllClientes,
  });

  return { isLoading, error, data };
};
