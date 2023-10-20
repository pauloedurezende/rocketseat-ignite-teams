interface NavigationParams {
  teams: undefined;
  create: undefined;
  players: {};
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationParams {}
  }
}
