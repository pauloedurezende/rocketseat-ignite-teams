import AsyncStorage from '@react-native-async-storage/async-storage';

import { Player, Team } from '@types';
import { PLAYER_COLLECTION } from '@utils/constants';

export async function getPlayersByTeam(id: Team['id']) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}:${id}`);
    const players: Player[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
