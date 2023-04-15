import * as actions from './features/creators';

export interface AppStateType {
  quests: Quest[];
  filters: Filter;
}

export type Location =
  | 'Location A'
  | 'Location B'
  | 'Location C'
  | 'Location D';

export interface Quest {
  id: number;
  name: string;
  location: Location;
  xp: number;
  completed: boolean;
}

export interface Filter {
  completed: boolean;
  xpRange: [number, number];
  locations: Location[];
}

type ActionCreators<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypes = ReturnType<ActionCreators<typeof actions>>;
