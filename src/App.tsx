import React from 'react';
import './App.css';

import QuestListComponent from './components/QuestList';

import {useAppSelector} from './app/hooks'
import { selectQuests } from './features/quests/questsSliceTS';
import { selectFilters } from './features/filters/filtersSliceTS';

function App() {
  const quests = useAppSelector(selectQuests);
  const filters = useAppSelector(selectFilters);

  console.log(filters);

  return (
    <div className="App">
      <h1>App component</h1>

      {<QuestListComponent quests={quests}/>  }

    </div>
  );
}

export default App;
