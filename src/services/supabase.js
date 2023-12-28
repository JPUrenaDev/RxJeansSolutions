import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://thrqdxpnhykuvzdyiakg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocnFkeHBuaHlrdXZ6ZHlpYWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3MTg4MTEsImV4cCI6MjAxOTI5NDgxMX0.FuuI1k5ijoKvSgvWJwHE9oVFrE_5zVKpxNK9NLtTmQA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
