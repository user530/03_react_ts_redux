import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export const loggerMiddleware: Middleware<{}, RootState> =
  (storeApi) => (next) => (action) => {
    const state = storeApi.getState();
    console.log('Logger middleware fired!');
    console.log('Current state: ', state);
  };
