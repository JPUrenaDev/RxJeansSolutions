import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertArs } from "../services/apiArs";
import toast from "react-hot-toast";
export const useInsertArs = (handleClose) => {
  const queryClient = useQueryClient();
  const { mutate: CreatingArs } = useMutation({
    mutationFn: insertArs,
    onSuccess: () => {
      toast.success("Ars insertada correctamente");
      handleClose();
      queryClient.invalidateQueries({ queryKey: ["arsList"] });
    },
  });

  return { CreatingArs };
};
