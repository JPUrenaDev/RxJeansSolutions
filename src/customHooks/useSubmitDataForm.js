//!CUSTOM HOOK.

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { useForm } from "react-hook-form";

export const useSubmitDataForm = async () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { Nombres, Apellidos } = data;
  };

  return { register, handleSubmit, watch, errors, onSubmit };
};
