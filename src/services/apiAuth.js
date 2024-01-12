import supabase from "./supabase";

export async function login({ email, pass }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass,
  });

  if (error) throw new Error("Parameter is not a number!");
  if (data) return data;
}

export async function getActualSession() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser(); //es mas seguro tomar los datos desde supabase
  if (error) throw new Error();
  if (data) return data?.user;
}
