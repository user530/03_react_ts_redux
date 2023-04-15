import { Quest, ActionTypes } from '../../models';
import Actions from '../actions';

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

export default function questsReducer(
  state: Quest[] = initialState,
  action: ActionTypes
) {
  switch (action.type) {
    case Actions.ADD_QUEST: {
      return [
        ...state,
        {
          id: nextQuestId(state),
          name: action.payload.name,
          location: action.payload.location,
          xp: action.payload.xp,
          completed: false,
        },
      ];
    }

    case Actions.DELETE_QUEST: {
      return state.filter((quest) => quest.id !== action.payload.questId);
    }

    case Actions.COMPLETE_QUEST: {
      return state.map((quest) =>
        quest.id === action.payload.questId
          ? { ...quest, completed: true }
          : quest
      );
    }

    case Actions.RESET_QUEST: {
      return state.map((quest) =>
        quest.id === action.payload.questId
          ? { ...quest, completed: false }
          : quest
      );
    }

    default:
      return state;
  }
}

function nextQuestId(quests: Quest[]): number {
  const maxId = quests.reduce(
    (maxId, currentQuest) => Math.max(maxId, currentQuest.id),
    -1
  );
  return maxId + 1;
}
