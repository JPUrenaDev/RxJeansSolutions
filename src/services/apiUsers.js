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

export const useInsertUser = async (Clientesinformation) => {
  console.log(Clientesinformation);
  const { data, error } = await supabase
    .from("clientes")
    .insert([{ ...Clientesinformation, id_Ars: 2 }])
    .select();

  if (data) return data;
};
