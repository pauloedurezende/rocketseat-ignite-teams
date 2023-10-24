import AsyncStorage from '@react-native-async-storage/async-storage';

import { Team } from '@types';

import { getAllAvailableTeams } from './get-all-available-teams';
import { TEAM_COLLECTION } from '@utils/constants';

export async function remove(id: Team['id']) {
  try {
    const availableTeams = await getAllAvailableTeams();
    const filteredTeams = availableTeams.filter((team) => team.id !== id);

    const stringifiedTeams = JSON.stringify(filteredTeams);

    await AsyncStorage.setItem(TEAM_COLLECTION, stringifiedTeams);
  } catch (error) {
    throw error;
  }
}
