import AsyncStorage from '@react-native-async-storage/async-storage';

import { Player, Team } from '@types';

import { getPlayersByTeam } from './get-players-by-team';
import { PLAYER_COLLECTION } from '@utils/constants';

export async function remove(player: Player['id'], team: Team['id']) {
  try {
    const storage = await getPlayersByTeam(team);
    const players = storage.filter((item) => item.id !== player);

    const stringifiedPlayers = JSON.stringify(players);

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}:${team}`,
      stringifiedPlayers,
    );
  } catch (error) {
    throw error;
  }
}
