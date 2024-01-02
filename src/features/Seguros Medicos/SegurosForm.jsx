import React from "react";
import { useSubmitDataForm } from "../../customHooks/useSubmitDataForm";
import { RequireFieldFormMessage } from "../../helpers/RequireFieldFormMessage";
import { useGetAllArs } from "../../customHooks/useGetAllArs";
import { useInsertArs } from "../../customHooks/useInsertArs";
export const SegurosForm = ({ handleClose, datos }) => {
  const { register, handleSubmit, errors } = useSubmitDataForm({
    datos,
  });
  const { CreatingArs } = useInsertArs(handleClose); //*MUTATE REACT QUERY

  const onSubmit = (data) => {
    CreatingArs(data);
  };

  return (
    <div>
      <h3
        onClick={handleClose}
        className="flex ml-[600px] text-lg w-5 h-5 font-semibold pb-3 cursor-pointer"
      >
        x
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Nombres"
            >
              Nombre Ars
            </label>
            <input
              {...register("nombre_ars", { required: true })}
              className="appearance-none  w-[600px] bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nombre_ars"
              type="text"
              placeholder="Jane"
            />
            {errors.nombre_ars?.type === "required" && (
              <RequireFieldFormMessage />
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Insertar Seguro
          </button>
          <button
            onClick={handleClose}
            className="bg-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
