import AsyncStorage from '@react-native-async-storage/async-storage';

import { Team } from '@types';
import { TEAM_COLLECTION } from '@utils/constants';

export async function getAllAvailableTeams() {
  const storage = await AsyncStorage.getItem(TEAM_COLLECTION);
  const teams: Team[] = storage ? JSON.parse(storage) : [];

  return teams;
}
