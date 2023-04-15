import { Location } from '../models';
import Actions from './actions';

export const createAddQuest = (
  name: string,
  location: Location,
  xp: number
) => ({
  type: Actions.ADD_QUEST,
  payload: { name, location, xp },
});

export const createDeleteQuest = (questId: number) => ({
  type: Actions.DELETE_QUEST,
  payload: { questId },
});

export const createCompleteQuest = (questId: number) => ({
  type: Actions.COMPLETE_QUEST,
  payload: { questId },
});

export const createResetQuest = (questId: number) => ({
  type: Actions.RESET_QUEST,
  payload: { questId },
});

export const createStatusFilterChange = (newStatusFilter: boolean) => ({
  type: Actions.STATUS_FILTER_CHANGED,
  payload: { newStatusFilter },
});

export const createLocationFilterChange = (newLocationFilter: Location[]) => ({
  type: Actions.LOCATION_FILTER_CHANGED,
  payload: { newLocationFilter },
});

export const createXpFilterChange = (newXpFilter: [number, number]) => ({
  type: Actions.XP_FILTER_CHANGED,
  payload: { newXpFilter },
});
