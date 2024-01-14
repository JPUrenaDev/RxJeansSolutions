import React from "react";
import { useSubmitDataForm } from "../../customHooks/useSubmitDataForm";
import { RequireFieldFormMessage } from "../../helpers/RequireFieldFormMessage";
import { insertarUsuario } from "../../customHooks/useInsertUser";
import { useUpdateUser } from "../../customHooks/useUpdateUser";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";
import { useGetAllCategories } from "../../customHooks/useGetAllCategories";
import { useGetAllProveedores } from "../../customHooks/useGetAllProveedores";
import { useInsertProduct } from "../../customHooks/useInsertProductos";
export const ProductosForm = ({
  handleClose,
  datos,
  deshabilitarInputs = false,
}) => {
  const { addProductMutate } = useInsertProduct();
  const { data: categorias } = useGetAllCategories();
  const { data: proveedor } = useGetAllProveedores();
  const { createUser } = insertarUsuario(handleClose); //*CREATE REACT QUERY (MUTATE)
  const { actualizarUsuario } = useUpdateUser(handleClose); //*UPDATE REACT QUERY (MUTATE)
  const [activarEdicion, setActivarEdicion] = useState(deshabilitarInputs);

  const onActivarEdicion = () => {
    setActivarEdicion(!activarEdicion);
  };

  const onSubmit = (data) => {
    addProductMutate(data);
  };

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
              htmlFor="nombre_producto"
            >
              Nombre Producto
            </label>
            <input
              disabled={activarEdicion}
              {...register("nombre_producto", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nombre_producto"
              type="text"
              placeholder="Jane"
            />
            {errors.id_categoria?.type === "required" && (
              <RequireFieldFormMessage />
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="barcode"
            >
              Codigo Barra
            </label>
            <input
              disabled={activarEdicion}
              {...register("barcode", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="barcode"
              type="text"
              placeholder="Doe"
            />
            {errors.barcode?.type === "required" && <RequireFieldFormMessage />}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="fecha_vencimiento"
            >
              Fecha Vencimiento
            </label>
            <input
              disabled={activarEdicion}
              {...register("fecha_vencimiento", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="fecha_vencimiento"
              type="date"
            />
            {errors.Fecha_Nacimiento?.type === "required" && (
              <RequireFieldFormMessage />
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="precio_unitario"
            >
              Precio Unitario
            </label>
            <input
              disabled={activarEdicion}
              {...register("precio_unitario", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="precio_unitario"
              min={1}
              type="number"
              placeholder="$0.0"
            />

            {errors.precioUnitario?.type === "required" && (
              <RequireFieldFormMessage />
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-[1000px]  mt-7  px-3 mb-7 md:mb-0">
            <div className="relative">
              <select
                disabled={activarEdicion}
                {...register("categoriaid")}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="categoriaid"
              >
                {categorias?.map((categorias) => {
                  return (
                    <option
                      key={categorias.nombre_categoria}
                      value={categorias.id}
                    >
                      {categorias.nombre_categoria}
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
              htmlFor="proveedorid"
            >
              Proveedor
            </label>
            <div className="relative">
              <select
                disabled={activarEdicion}
                {...register("proveedorid")}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="proveedorid"
              >
                {proveedor?.map((proveedor) => {
                  return (
                    <option key={proveedor.id} value={proveedor.id}>
                      {proveedor.nombre}
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
              htmlFor="descripcion"
            >
              Descripción
            </label>
            <textarea
              disabled={activarEdicion}
              {...register("descripcion")}
              className="appearance-none mb-4 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="descripcion"
              type="text"
              placeholder="descripcion:"
            />
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
