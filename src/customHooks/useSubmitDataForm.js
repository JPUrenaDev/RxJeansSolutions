//!CUSTOM HOOK.

import { useForm } from "react-hook-form";

export function useSubmitDataForm({ datos }) {
  console.log(datos);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: datos });

  return { register, handleSubmit, watch, errors };
}
