import supabase from "./supabase";

export const getAllCategories = async () => {
  const { data: categorias, error } = await supabase
    .from("categorias")
    .select("*");

  if (error) return new Error();

  return categorias;
};
