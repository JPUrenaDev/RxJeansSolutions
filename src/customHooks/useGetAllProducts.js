import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/apiProductos";

export const useGetAllProduct = () => {
  const { data } = useQuery({
    queryKey: ["productos"],
    queryFn: getAllProducts,
  });

  console.log(data);
  return { data };
};
