import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://potnfxvvnovysrungdpk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvdG5meHZ2bm92eXNydW5nZHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3MjQyNTcsImV4cCI6MTk5MDMwMDI1N30.S8iXNBEkR7aIuqK6BG7oX8VId0M7mNETvukLimwVnqU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
