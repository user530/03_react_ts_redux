// import * as actions from './features/creators';

// type ActionCreators<T> = T extends { [key: string]: infer U } ? U : never;
// export type ActionTypes = ReturnType<ActionCreators<typeof actions>>;

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
