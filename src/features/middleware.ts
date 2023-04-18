import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export const loggerMiddleware: Middleware<{}, RootState> =
  (storeApi) => (next) => (action) => {
    console.log('Logger middleware fired!');

    if (action.type === 'quests/addQuest')
      console.log('Middleware detected AddQuest action!');

    return next(action);
  };
