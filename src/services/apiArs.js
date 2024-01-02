import supabase from "./supabase";

export const getAllArs = async () => {
  const { data: seguros, error } = await supabase.from("seguros").select("*");

  if (error) throw new Error();
  return seguros;
};

export const insertArs = async ({ nombre_ars }) => {
  const { data: segurosData, error } = await supabase
    .from("seguros")
    .insert([{ nombre_ars: nombre_ars }])
    .select();
  if (error) throw new Error();
  return segurosData;
};
