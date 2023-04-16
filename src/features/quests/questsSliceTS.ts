import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Quest } from '../../models';
import { RootState } from '../../app/store';

const initialState: Quest[] = [
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
];

export const questSliceTS = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    addQuest: (
      state,
      action: PayloadAction<{ name: string; location: string; xp: number }>
    ) => {
      const { name, location, xp } = action.payload;
      const newQuest = {
        id: nextQuestId(state),
        name,
        location,
        xp,
        completed: false,
      } as Quest;
      state = [...state, newQuest];
    },

    removeQuest: (state, action: PayloadAction<{ questId: number }>) => {
      const { questId } = action.payload;

      state = state.filter((quest) => quest.id !== questId);
    },

    toggleQuestComplete: (
      state,
      action: PayloadAction<{ questId: number }>
    ) => {
      const { questId } = action.payload;

      state = state.map((quest) =>
        quest.id === questId ? { ...quest, completed: !quest.completed } : quest
      );
    },
  },
});

export const { addQuest, removeQuest, toggleQuestComplete } =
  questSliceTS.actions;

export const selectQuests = (state: RootState) => state.quests;

export default questSliceTS.reducer;

function nextQuestId(quests: Quest[]): number {
  const maxId = quests.reduce(
    (maxId, currentQuest) => Math.max(maxId, currentQuest.id),
    -1
  );
  return maxId + 1;
}
