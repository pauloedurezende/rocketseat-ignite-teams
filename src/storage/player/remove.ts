import AsyncStorage from '@react-native-async-storage/async-storage';

import { Player, Team } from '@types';

import { PLAYER_COLLECTION } from '@utils/constants';
import { getPlayersByTeam } from './get-players-by-team';

export async function remove(player: Player['id'], team: Team['id']) {
  const storage = await getPlayersByTeam(team);
  const players = storage.filter((item) => item.id !== player);

  const stringifiedPlayers = JSON.stringify(players);

  await AsyncStorage.setItem(
    `${PLAYER_COLLECTION}:${team}`,
    stringifiedPlayers,
  );
}
