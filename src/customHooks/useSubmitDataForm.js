//!CUSTOM HOOK.

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { useForm } from "react-hook-form";

export function useSubmitDataForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return { register, handleSubmit, watch, errors, onSubmit };
}
