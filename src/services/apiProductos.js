import supabase from "./supabase";

export const getAllProducts = async ({ firstElement, lastElement }) => {
  console.log(firstElement, lastElement);
  const {
    data: productos,
    error,
    count,
  } = await supabase
    .from("productos")
    .select(
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
    )
    .range(firstElement, lastElement);

  if (error) throw new Error();
  return { productos, count };
};

export const insertProduct = async (datas) => {
  console.log(datas);
  const { data, error } = await supabase
    .from("productos")
    .insert([datas])
    .select()
    .range();

  if (error) throw new Error();
  return data;
};
