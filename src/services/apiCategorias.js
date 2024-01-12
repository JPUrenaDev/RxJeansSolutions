import supabase from "./supabase";

export const getAllCategories = async () => {
  let query = await supabase.from("categorias").select("*", { count: "exact" });

  const { data: categorias, count, error } = await query;

  if (error) return new Error();

  return { categorias, count };
};
