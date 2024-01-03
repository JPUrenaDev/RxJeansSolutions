import supabase from "./supabase";

export const getAllClientes = async (a) => {
  const { data, errors } = await supabase.from("clientes").select(`
    *,
    seguros (
      nombre_ars
    )
  `);
  return data;
};

export const useInsertUser = async (Clientesinformation) => {
  console.log(Clientesinformation.imagen);
  const imageName = `${Math.random()}-${
    Clientesinformation.imagen.name
  }`.replaceAll("/", "");
  const imagePath = `https://thrqdxpnhykuvzdyiakg.supabase.co/storage/v1/object/public/avatars/${imageName}`;
  // const { imagen, ...user } = Clientesinformation;
  const { data, error } = await supabase
    .from("clientes")
    .insert([{ ...Clientesinformation, imagen: imagePath }])
    .select();

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(imageName, Clientesinformation.imagen);

  if (data) return data;
};

export const updateUser = async (datas) => {
  const { id, created_at, seguros, ...userInformationToUpdate } = datas;

  console.log(userInformationToUpdate);

  const { data, error } = await supabase
    .from("clientes")
    .update(userInformationToUpdate)
    .eq("id", id)
    .select();

  if (data) return data;
};

export const deleteUser = async (userId) => {
  console.log(userId);
  const { error, data } = await supabase
    .from("clientes")
    .delete()
    .eq("id", userId);

  if (data) return data;
};
