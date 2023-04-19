import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Quest } from '../../models';
import { AppDispatch, RootState } from '../../app/store';
import { Location } from '../../models';

const initialState = [
  {
    id: 0,
    name: 'Complete the tutorial',
    location: 'Location A',
    xp: 50,
    completed: true,
  },
  {
    id: 1,
    name: "Find the dog called 'Max'",
    location: 'Location A',
    xp: 75,
    completed: false,
  },
  {
    id: 2,
    name: 'Deliver the message to the mayor',
    location: 'Location B',
    xp: 100,
    completed: false,
  },
  {
    id: 3,
    name: 'Collect 10 berries from the dark wood',
    location: 'Location C',
    xp: 150,
    completed: false,
  },
  {
    id: 4,
    name: 'Defeat the Big Bad Evil Guy',
    location: 'Location D',
    xp: 250,
    completed: false,
  },
] as Quest[];

export const testAsyncThunk = createAsyncThunk<
  void,
  { name: string; location: Location; xp: number },
  { dispatch: AppDispatch; state: RootState }
>('quests/testAsync', async (thunkArg, thunkApi) => {
  setTimeout(() => console.log('Async thunk fired!'), 500);
});

export const questSliceTS = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    addQuest: (
      state,
      action: PayloadAction<{ name: string; location: Location; xp: number }>
    ) => {
      const { name, location, xp } = action.payload;

      state.push({
        id: nextQuestId(state),
        name,
        location,
        xp,
        completed: false,
      });
    },

    removeQuest: (state, action: PayloadAction<{ questId: number }>) => {
      const { questId } = action.payload;

      return state.filter((quest) => quest.id !== questId);
    },

    toggleQuestComplete: (
      state,
      action: PayloadAction<{ questId: number }>
    ) => {
      const { questId } = action.payload;

      return state.map((quest) =>
        quest.id === questId ? { ...quest, completed: !quest.completed } : quest
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(testAsyncThunk.pending, (state, action) => {
        // console.log('Async Thunk Pending!');
      })
      .addCase(testAsyncThunk.rejected, (state, action) => {
        // console.log('Async Thunk Rejected!');
      })
      .addCase(testAsyncThunk.fulfilled, (state, action) => {
        // console.log('Async Thunk Fulfilled!');
      });
  },
});

export const { addQuest, removeQuest, toggleQuestComplete } =
  questSliceTS.actions;

export const selectQuests = (state: RootState) => state.quests;

export default questSliceTS.reducer;

export function nextQuestId(quests: Quest[]): number {
  const maxId = quests.reduce(
    (maxId, currentQuest) => Math.max(maxId, currentQuest.id),
    -1
  );
  return maxId + 1;
}
