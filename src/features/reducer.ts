import { combineReducers } from '@reduxjs/toolkit';
// import questsReducer from './quests/questsSlice';
// import filtersReducer from './filters/filtersSlice';

import questsReducerTS from './quests/questsSliceTS';
import filtersSliceTS from './filters/filtersSliceTS';

const rootReducer = combineReducers({
  quests: questsReducerTS,
  filters: filtersSliceTS,
});

export default rootReducer;
