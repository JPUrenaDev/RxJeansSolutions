import { useQuery } from "@tanstack/react-query";
import { getAllClientes } from "../services/apiUsers";

export const useGetAllUsers = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["clientes"],
    queryFn: getAllClientes,
  });

  console.log(data, 1111111111, "jeanspaul");

  return { isLoading, error, data };
};
