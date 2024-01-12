import { useQuery } from "@tanstack/react-query";
import { getAllProveedores } from "../services/apiProveedores";
export const useGetAllProveedores = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["proveedores"],
    queryFn: getAllProveedores,
  });

  return { data, isLoading, error };
};
