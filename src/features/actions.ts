const Actions = {
  ADD_QUEST: 'quests/questAdded',
  DELETE_QUEST: 'quests/questDeleted',
  COMPLETE_QUEST: 'quests/questCompleted',
  RESET_QUEST: 'quests/questReseted',
  STATUS_FILTER_CHANGED: 'filter/statusFilterChanged',
  LOCATION_FILTER_CHANGED: 'filter/locationFilterChanged',
  XP_FILTER_CHANGED: 'filter/xpFilterChanged',
} as const;

export default Actions;
