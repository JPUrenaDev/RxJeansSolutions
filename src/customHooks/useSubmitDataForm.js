//!CUSTOM HOOK.

import { useForm } from "react-hook-form";

export function useSubmitDataForm({ cliente }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: cliente });

  return { register, handleSubmit, watch, errors };
}
