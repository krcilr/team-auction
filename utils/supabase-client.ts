import { createClient } from "@supabase/supabase-js";
import { Owner } from "../types/owner";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export const getOwners = async () => {
  const { data, error } = await supabase.from("owners").select("*");

  if (error) {
    console.error("Failed to get owners", error);
    throw error;
  }

  return { data, error };
};

export const getOwnersTeams = async () => {
  const { data, error } = await supabase.from("owners_view").select("*");

  if (error) {
    console.error("Failed to get owners", error);
    throw error;
  }

  return { data: data as Owner[], error };
};

export const updateOwnerTeams = async (teamName: string, wins: number ) => {
  const { error: updateError } = await supabase
    .from('owner_teams')
    .update({ team_wins: wins })
    .eq('team_name', teamName);

  if (updateError) {
    console.error('Failed to update owner_teams', updateError);
    throw updateError;
  }

  return { successful: true };
};
