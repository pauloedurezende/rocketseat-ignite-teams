import { nanoid } from 'nanoid';

import { ApplicationError } from '@utils/application-error';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { TEAM_COLLECTION } from '@utils/constants';
import { getAllAvailableTeams } from './get-all-available-teams';

export async function create(name: string) {
  const availableTeams = await getAllAvailableTeams();
  const isTeamAlreadyRegistered = availableTeams.find(
    (team) => team.name === name,
  );

  if (isTeamAlreadyRegistered) {
    throw new ApplicationError('Team already exists with this name.');
  }

  const newTeam = {
    id: nanoid(),
    name,
  };

  const stringifiedTeam = JSON.stringify([...availableTeams, newTeam]);

  await AsyncStorage.setItem(TEAM_COLLECTION, stringifiedTeam);
}
