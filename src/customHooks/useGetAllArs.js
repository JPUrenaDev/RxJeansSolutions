import { useQuery } from "@tanstack/react-query";
import { usePagination } from "./usePagination";
import { getAllArs } from "../services/apiArs";

export const useGetAllArs = () => {
  const { firstElement, lastElement } = usePagination();
  const { data: { seguros: data, count } = {}, isLoading } = useQuery({
    queryKey: ["arsList", firstElement, lastElement],
    queryFn: () => getAllArs({ firstElement, lastElement }),
  });

  console.log(data);

  return { isLoading, data, count };
};
