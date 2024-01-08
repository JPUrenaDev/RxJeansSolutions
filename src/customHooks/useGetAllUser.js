import { useQuery } from "@tanstack/react-query";
import { getAllClientes } from "../services/apiUsers";
import { usePagination } from "./usePagination";
export const useGetAllUsers = () => {
  const { firstElement, lastElement } = usePagination();
  const {
    isLoading,
    error,
    data: { data: userData, count } = {}, //destructuring
  } = useQuery({
    queryKey: ["clientes", firstElement, lastElement],
    queryFn: () => getAllClientes({ firstElement, lastElement }),
  });

  return { isLoading, error, userData, count };
};
