import { updateOwnerTeams } from "./supabase-client";

export const fetchNflTeamWins = async () => {
  try {
    const response = await fetch(
      "https://cdn.espn.com/core/nfl/standings?xhr=1"
    );
    const data = await response.json();

    const AFC = data.content.standings;
    AFC.groups.forEach((group: any) => {
      console.log("group", group);
      if (group.groups) {
        group.groups.forEach((grp: any) => {
          console.log("grp", grp);
          if (grp.standings.entries) {
            grp.standings.entries.forEach((standing: any) => {
              console.log("standing", standing);
              const team = standing.team;
              const stats = standing.stats;
              updateTeamWins(team, stats);
              // if (standing.entries) {
              //   standing.entries.forEach((entry: any) => {
              //     console.log("entry", entry);
              //     const team = entry.team;
              //     const stats = entry.stats;
              //     updateTeamWins(team, stats);
              //   });
              // }
            });
          }
        });
      }
    });


    return { successful: true };
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

const updateTeamWins = (team: iTeam, stats: iStats[]) => {
  const winsStatsObject = stats.find((stat) => stat.name === "wins");
  const wins = winsStatsObject?.value;

  console.log(`Team ${team.shortDisplayName} has ${wins} wins`);

  if (!wins) {
    console.error("No wins found for team", team);
    return;
  }

  const winsAsInt = Math.floor(wins as number);
  updateOwnerTeams(team.shortDisplayName, winsAsInt);
  //TODO:  Find division leader and update payouts
};

interface iStats {
  shortDisplayName: string;
  displayValue: number;
  displayName: string;
  name: string;
  description: string;
  type: string;
  abbreviation: string;
  value: number;
}

interface iTeam {
  shortDisplayName: string;
  uid: string;
  seed: number;
  displayName: string;
  name: string;
  link: string;
  location: string;
  id: number;
  abbreviation: string;
  isActive: boolean;
  logos: any[];
}
