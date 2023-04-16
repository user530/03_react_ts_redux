// import { ActionTypes, Filter } from '../../models';
// import Actions from '../actions';

// const initialState: Filter = {
//   completed: false,
//   locations: ['Location A', 'Location B', 'Location C', 'Location D'],
//   xpRange: [0, 1000],
// };

// export default function filtersReducer(
//   state: Filter = initialState,
//   action: ActionTypes
// ) {
//   switch (action.type) {
//     case Actions.STATUS_FILTER_CHANGED: {
//       return { ...state, completed: action.payload.newStatusFilter };
//     }

//     case Actions.LOCATION_FILTER_CHANGED: {
//       return { ...state, locations: action.payload.newLocationFilter };
//     }

//     case Actions.XP_FILTER_CHANGED: {
//       return { ...state, xpRange: action.payload.newXpFilter };
//     }

//     default:
//       return state;
//   }
// }

export {};
