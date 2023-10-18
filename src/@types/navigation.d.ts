interface NavigationParams {
  teams: undefined;
  create: undefined;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationParams {}
  }
}
