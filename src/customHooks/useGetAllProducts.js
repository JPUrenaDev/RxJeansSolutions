import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/apiProductos";
import { usePagination } from "./usePagination";
import { useSearchParams } from "react-router-dom";

export const useGetAllProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoria =
    searchParams.get("categoria") && searchParams.get("categoria");

  const { firstElement, lastElement } = usePagination();

  const { data } = useQuery({
    queryKey: ["productos", firstElement, categoria],
    queryFn: () => getAllProducts({ firstElement, lastElement, categoria }),
  });

  return { data };
};
