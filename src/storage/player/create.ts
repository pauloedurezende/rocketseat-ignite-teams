import AsyncStorage from '@react-native-async-storage/async-storage';
import { nanoid } from 'nanoid';

import { Player, Team } from '@types';
import { ApplicationError } from '@utils/application-error';
import { PLAYER_COLLECTION } from '@utils/constants';

import { getPlayersByTeam } from './get-players-by-team';

export async function create(player: Omit<Player, 'id'>, team: Team['id']) {
  try {
    const availablePlayers = await getPlayersByTeam(team);
    const isPlayerAlreadyRegisteredInTeam = availablePlayers.find(
      (item) => item.name === player.name,
    );

    if (isPlayerAlreadyRegisteredInTeam) {
      throw new ApplicationError(
        'Player already exists with this name in this team.',
      );
    }

    const newPlayer = {
      id: nanoid(),
      name: player.name,
      side: player.side,
    };

    const stringifiedPlayers = JSON.stringify([...availablePlayers, newPlayer]);

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}:${team}`,
      stringifiedPlayers,
    );
  } catch (error) {
    throw error;
  }
}
