import AsyncStorage from '@react-native-async-storage/async-storage';

import { Team } from '@types';

import { TEAM_COLLECTION } from '@utils/constants';
import { getAllAvailableTeams } from './get-all-available-teams';

export async function remove(id: Team['id']) {
  const availableTeams = await getAllAvailableTeams();
  const filteredTeams = availableTeams.filter((team) => team.id !== id);

  const stringifiedTeams = JSON.stringify(filteredTeams);

  await AsyncStorage.setItem(TEAM_COLLECTION, stringifiedTeams);
}
