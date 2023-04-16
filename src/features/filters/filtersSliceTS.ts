import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter, Location } from '../../models';
import { RootState } from '../../app/store';

const initialState: Filter = {
  completed: false,
  locations: ['Location A', 'Location B', 'Location C', 'Location D'],
  xpRange: [0, 1000],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleStatusFilter: (state) => {
      state.completed = !state.completed;
    },

    setLocationsFilter: (
      state,
      action: PayloadAction<{ locationsFilter: Location[] }>
    ) => {
      state.locations = action.payload.locationsFilter;
    },

    setXpFilter: (
      state,
      action: PayloadAction<{ xpRange: [number, number] }>
    ) => {
      state.xpRange = action.payload.xpRange;
    },
  },
});

export const { toggleStatusFilter, setLocationsFilter, setXpFilter } =
  filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters;

export default filtersSlice.reducer;
