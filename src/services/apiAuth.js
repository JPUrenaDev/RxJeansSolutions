import supabase from "./supabase";

export async function login({ email, pass }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass,
  });

  if (error) throw new Error("Parameter is not a number!");
  if (data) return data;
}
