import { getActualSession } from "../services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetSession = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["actualSession"],
    queryFn: getActualSession,
  });

  return {
    isLoading,
    error,
    data,
    isAuthenticated: data?.role === "authenticated",
  };
};
