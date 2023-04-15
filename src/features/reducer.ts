import { combineReducers } from '@reduxjs/toolkit';
import questsReducer from './quests/questsSlice';
import filtersReducer from './filters/filtersSlice';

const rootReducer = combineReducers({
  quests: questsReducer,
  filters: filtersReducer,
});

export default rootReducer;
