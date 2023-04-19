import React from 'react';
import './App.css';
import QuestListComponent from './components/QuestList';
import { useAppSelector } from './app/hooks';
import { selectQuests } from './features/quests/questsSliceTS';
import { selectFilters } from './features/filters/filtersSliceTS';
import FilterComponent from './components/Filter';
import InputFormComponent from './components/InputForm';

function App() {
  const quests = useAppSelector(selectQuests);
  const filters = useAppSelector(selectFilters);

  const filteredQuests = quests.filter(
    (quest) =>
      quest.completed === filters.completed &&
      filters.locations.includes(quest.location) &&
      quest.xp >= filters.xpRange[0] &&
      quest.xp <= filters.xpRange[1]
  );

  return (
    <div className="App">
      <h1>Quest Log:</h1>
      <InputFormComponent />
      <FilterComponent filters={filters} />
      <QuestListComponent quests={filteredQuests} />
    </div>
  );
}

export default App;
