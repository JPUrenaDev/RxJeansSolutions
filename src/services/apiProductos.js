import supabase from "./supabase";

export const getAllProducts = async () => {
  const {
    data: productos,
    error,
    count,
  } = await supabase.from("productos").select(
    `
    *,
    categorias (
      
      nombre_categoria
    ),
    proveedores(
        nombre
    )
  `,
    { count: "exact" }
  );

  if (error) throw new Error();
  return { productos, count };
};

export const insertProduct = async () => {
  const { data, error } = await supabase
    .from("productos")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();

  if (error) throw new Error();
  return data;
};
