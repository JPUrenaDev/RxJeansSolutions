import React from "react";

import { useSubmitDataForm } from "../../customHooks/useSubmitDataForm";
import { RequireFieldFormMessage } from "../../helpers/RequireFieldFormMessage";
import { insertarUsuario } from "../../customHooks/useInsertUser";

export const CategoriaForm = ({ handleClose, datos }) => {
  const { createUser, isCreating } = insertarUsuario(handleClose); //*MUTATE REACT QUERY

  const onSubmit = (data) => {
    createUser(data);
  };
  const { register, handleSubmit, watch, errors } = useSubmitDataForm({
    datos,
  });
  return (
    <div className="bg-black w-auto">
      <h3
        onClick={handleClose}
        className="flex ml-[600px] text-lg w-5 h-5 font-semibold pb-3 cursor-pointer"
      >
        x
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap  ">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Nombres"
            >
              Nombre Categoria
            </label>
            <input
              {...register("Nombres", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="Nombres"
              type="text"
              placeholder="Jane"
            />
            {errors.Nombres?.type === "required" && <RequireFieldFormMessage />}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Apellidos"
            >
              Disponiblidad
            </label>
            <input
              {...register("Apellidos", { required: true })}
              id="Apellidos"
              type="radio"
              value={"check"}
              placeholder="Doe"
            />
            <input
              {...register("Apellidos", { required: true })}
              id="Apellidos"
              type="radio"
              value={"check"}
              placeholder="Doe"
            />
            {errors.Apellidos?.type === "required" && (
              <RequireFieldFormMessage />
            )}
          </div>
          <div className="w-[800px]">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Apellidos"
            >
              Descripcion
            </label>
            <textarea
              {...register("Apellidos", { required: true })}
              className="appearance-none  block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="Nombres"
              placeholder="Jane"
            />

            {errors.Apellidos?.type === "required" && (
              <RequireFieldFormMessage />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
