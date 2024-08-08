import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eykhehyomscqkxiyxtyc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5a2hlaHlvbXNjcWt4aXl4dHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMjg4NjYsImV4cCI6MjAzODYwNDg2Nn0.xx5pqBHLzxooFRFMYJ-Cnqv-prd1fvV2BBGIMySGoHs";
export const supabase = createClient(supabaseUrl, supabaseKey);