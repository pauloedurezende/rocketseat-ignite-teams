import { Team, TeamSide } from '@types';
import { getPlayersByTeam } from './get-players-by-team';

export async function getPlayersBySideAndTeam(
  side: TeamSide,
  team: Team['id'],
) {
  try {
    const storage = await getPlayersByTeam(team);
    const players = storage.filter((item) => item.side === side);

    return players;
  } catch (error) {
    throw error;
  }
}
