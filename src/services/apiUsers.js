import supabase from "./supabase";

export const getAllClientes = async (a) => {
  const { data, errors } = await supabase.from("clientes").select(`
    *,
    seguros (
      nombre_ars
    )
  `);
  console.log(data);
  return data;
};
