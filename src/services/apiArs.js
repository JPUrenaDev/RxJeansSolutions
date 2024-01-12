import supabase from "./supabase";

export const getAllArs = async ({ firstElement, lastElement }) => {
  const query = supabase.from("seguros").select("*", { count: "exact" });

  query.range(firstElement, lastElement);

  const { data: seguros, error, count } = await query;

  if (error) throw new Error();
  return { seguros, count };
};

export const insertArs = async ({ nombre_ars }) => {
  const { data: segurosData, error } = await supabase
    .from("seguros")
    .insert([{ nombre_ars: nombre_ars }])
    .select();
  if (error) throw new Error();
  return segurosData;
};
