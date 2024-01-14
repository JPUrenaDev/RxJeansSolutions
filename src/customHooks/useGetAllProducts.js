import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/apiProductos";
import { usePagination } from "./usePagination";

export const useGetAllProduct = () => {
  const { firstElement, lastElement } = usePagination();
  console.log(firstElement, lastElement);
  const { data } = useQuery({
    queryKey: ["productos", firstElement],
    queryFn: () => getAllProducts({ firstElement, lastElement }),
  });

  return { data };
};
