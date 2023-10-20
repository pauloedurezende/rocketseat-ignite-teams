export type Team = {
  id: string;
  name: string;
};

export type RootStackParamList = {
  teams: undefined;
  create: undefined;
  players: {
    team: Team;
  };
};
