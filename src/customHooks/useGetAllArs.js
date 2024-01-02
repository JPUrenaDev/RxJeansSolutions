import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getAllArs } from "../services/apiArs";

export const useGetAllArs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["arsList"],
    queryFn: getAllArs,
  });

  return { data, isLoading };
};
