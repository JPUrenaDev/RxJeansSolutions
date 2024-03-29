import React, { useState } from "react";

import { useSubmitDataForm } from "../../customHooks/useSubmitDataForm";
import { RequireFieldFormMessage } from "../../helpers/RequireFieldFormMessage";
import { insertarUsuario } from "../../customHooks/useInsertUser";
import { useUpdateUser } from "../../customHooks/useUpdateUser";
import { useGetAllArs } from "../../customHooks/useGetAllArs";
import { MdOutlineEdit } from "react-icons/md";
import { Radio } from "@mui/material";

export const ClienteForm = ({
  handleClose,
  datos,
  deshabilitarInputs = false,
}) => {
  const { data: listaArs = [] } = useGetAllArs();
  const { createUser } = insertarUsuario(handleClose); //*CREATE REACT QUERY (MUTATE)
  const { actualizarUsuario } = useUpdateUser(handleClose); //*UPDATE REACT QUERY (MUTATE)
  const [activarEdicion, setActivarEdicion] = useState(deshabilitarInputs);
  const [changeCheckbox, setChangeCheckbox] = useState(datos?.status);
  const onActivarEdicion = () => {
    setActivarEdicion(!activarEdicion);
  };

  const onSubmit = (data) => {
    datos
      ? actualizarUsuario(data)
      : createUser({ ...data, imagen: data.imagen[0] });
  };

  console.log(datos?.status, "pruebaaa");
  const { register, handleSubmit, errors } = useSubmitDataForm({
    datos,
  });
  return (
    <div>
      {activarEdicion && (
        <button onClick={onActivarEdicion}>
          <MdOutlineEdit size={30} />
        </button>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Nombres"
            >
              Nombre
            </label>
            <input
              disabled={activarEdicion}
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
              Apellidos
            </label>
            <input
              disabled={activarEdicion}
              {...register("Apellidos", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Apellidos"
              type="text"
              placeholder="Doe"
            />
            {errors.Apellidos?.type === "required" && (
              <RequireFieldFormMessage />
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Fecha_Nacimiento"
            >
              Fecha Nacimiento
            </label>
            <input
              disabled={activarEdicion}
              {...register("Fecha_Nacimiento", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Fecha_Nacimiento"
              type="date"
            />
            {errors.Fecha_Nacimiento?.type === "required" && (
              <RequireFieldFormMessage />
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              disabled={activarEdicion}
              {...register("Email", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Email"
              type="email"
              placeholder="youremail@hotmail.com"
            />

            {errors.Email?.type === "required" && <RequireFieldFormMessage />}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Tel"
            >
              Telefono
            </label>
            <input
              disabled={activarEdicion}
              {...register("Tel", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Tel"
              type="tel"
              placeholder="809-000-0000"
            />
            {errors.Tel?.type === "required" && <RequireFieldFormMessage />}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Cel"
            >
              Celular
            </label>
            <input
              disabled={activarEdicion}
              {...register("Cel", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Cel"
              type="tel"
              placeholder="809-000-0000"
            />
            {errors.Cel?.type === "required" && <RequireFieldFormMessage />}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Cedula"
            >
              Cedula
            </label>
            <input
              disabled={activarEdicion}
              {...register("Cedula", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Cedula"
              type="text"
              placeholder="001-304050-3"
            />
            {errors.Cedula?.type === "required" && <RequireFieldFormMessage />}
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Genero"
            >
              Genero
            </label>
            <div className="relative">
              <select
                disabled={activarEdicion}
                {...register("Genero")}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="Genero"
              >
                <option>M</option>
                <option>F</option>
                <option>N/A</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[1000px]  mt-7  px-3 mb-7 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="id_Ars"
            >
              Seguro Médico
            </label>
            <div className="relative">
              <select
                disabled={activarEdicion}
                {...register("id_Ars")}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="id_Ars"
              >
                {listaArs.map((Ars) => {
                  return (
                    <option key={Ars.id} value={Ars.id}>
                      {Ars.nombre_ars}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[1000px]  mt-7  px-3 mb-7 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Notas_Adicionales"
            >
              Informaciones Adicionales
            </label>
            <textarea
              disabled={activarEdicion}
              {...register("Notas_Adicionales")}
              className="appearance-none mb-4 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Notas_Adicionales"
              type="text"
              placeholder="Informaciones Adicionales:"
            />
            <div className="flex gap-4 items-center">
              <label>
                {changeCheckbox ? "Desactivar Usuario" : "Activar Usuario"}
              </label>

              <input
                {...register("status")}
                type="checkbox"
                placeholder="klk"
                defaultChecked={datos?.status}
                onChange={() => setChangeCheckbox(!changeCheckbox)}
              ></input>
            </div>
          </div>

          <div className="w-full md:w-[1000px]  mt-7  px-3 mb-7 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="imagen"
            >
              imagen
            </label>
            {!activarEdicion ? (
              <input
                disabled={activarEdicion}
                {...register("imagen")}
                className="appearance-none mb-4 block w-full  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="imagen"
                type="file"
                accept="image/*"
                placeholder="Informaciones Adicionales:"
              />
            ) : (
              <img
                src={datos?.imagen}
                {...register("imagen")}
                className="appearance-none mb-4 w-[200px]   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="imagen"
                accept="image/*"
                placeholder="Informaciones Adicionales:"
              ></img>
            )}
          </div>
        </div>

        <div className="flex justify-between">
          {activarEdicion ? null : (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {datos ? "Actualizar Usuario" : "Insertar Usuario"}
            </button>
          )}

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
