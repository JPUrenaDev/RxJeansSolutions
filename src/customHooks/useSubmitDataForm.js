//!CUSTOM HOOK.

import { useForm } from "react-hook-form";

export function useSubmitDataForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return { register, handleSubmit, watch, errors };
}
