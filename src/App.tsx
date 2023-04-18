import React from 'react';
import './App.css';

import QuestListComponent from './components/QuestList';

import {useAppSelector, useAppDispatch} from './app/hooks';
import { selectQuests, addQuest, nextQuestId, testAsyncThunk} from './features/quests/questsSliceTS';
import { selectFilters } from './features/filters/filtersSliceTS';
import { Quest } from './models';

function App() {
  const dispatch = useAppDispatch();

  const quests = useAppSelector(selectQuests);
  const filters = useAppSelector(selectFilters);
  
  
  console.log(quests);
  console.log(filters);

  React.useEffect(()=>{
    const newQuest:Quest = 
      {id: nextQuestId(quests), name: 'New quest!', location: 'Location B', xp: 35, completed: false};
   
    // Dispatch standard action
    dispatch(addQuest(newQuest));
    
    // Dispatch async thunk
    dispatch(testAsyncThunk({name: 'another quest', location: 'Location C', xp: 100}))
  }, [])

  return (
    <div className="App">
      <h1>App component</h1>

      <QuestListComponent quests={quests}/>

    </div>
  );
}

export default App;
