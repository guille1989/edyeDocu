import { createClient } from "@supabase/supabase-js";
import siteConfig from "@generated/docusaurus.config";

// Ensure customFields exists first
const { customFields } = siteConfig;
if (!customFields) {
  throw new Error("Missing customFields in siteConfig");
}

const supabaseUrl = customFields.supabaseUrl as string | undefined;
const supabaseAnonKey = customFields.supabaseAnonKey as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY env vars");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      Accept: "application/json",
    },
  },
});
