import supabase from "./supabase";

export const getAllProveedores = async () => {
  const { data: proveedores, error } = await supabase
    .from("proveedores")
    .select("*");
  if (error) throw new Error();
  return proveedores;
};
