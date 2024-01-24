import supabase from "./supabase";

export const getAllProducts = async ({
  firstElement,
  lastElement,
  categoria,
}) => {
  let query = supabase.from("productos").select(
    `
  *,
  categorias!inner(
    
    nombre_categoria
  ),
  proveedores!inner(
      nombre
  )
`,
    { count: "exact" }
  );

  categoria && query.filter("categorias.nombre_categoria", "eq", categoria);
  query.range(firstElement, lastElement);
  const { data: productos, error, count } = await query;

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
