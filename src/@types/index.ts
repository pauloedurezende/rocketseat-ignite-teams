export type Team = {
  id: string;
  name: string;
};

export enum TeamSide {
  Home = 'home',
  Away = 'away',
}

export type Player = {
  id: string;
  name: string;
  side: TeamSide;
};

export type RootStackParamList = {
  teams: undefined;
  create: undefined;
  players: {
    team: Team;
  };
};
