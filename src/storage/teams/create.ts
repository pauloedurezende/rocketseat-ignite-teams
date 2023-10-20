import { nanoid } from 'nanoid';

import { ApplicationError } from '@utils/application-error';

import { getAllAvailableTeams } from './get-all-available-teams';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TEAM_COLLECTION } from '@utils/constants';

export async function create(name: string) {
  try {
    const availableTeams = await getAllAvailableTeams();
    const isTeamAlreadyRegistered = availableTeams.find(
      (team) => team.name === name,
    );

    if (isTeamAlreadyRegistered) {
      throw new ApplicationError('Team already exists with this name.');
    }

    const team = {
      id: nanoid(),
      name,
    };

    const stringifiedTeam = JSON.stringify([...availableTeams, team]);

    await AsyncStorage.setItem(TEAM_COLLECTION, stringifiedTeam);
  } catch (error) {
    throw error;
  }
}
