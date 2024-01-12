import { getAllCategories } from "../services/apiCategorias";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategories = () => {
  const {
    data: { categorias: data, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["allCategories"],
    queryFn: getAllCategories,
  });

  if (error) throw new Error();
  return { data, count };
};
