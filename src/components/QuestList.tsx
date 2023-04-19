import React from 'react';
import './styles/QuestList.css';

import { Quest } from '../models';
import QuestComponent from './Quest';

interface QuestListProps {
  quests: Quest[];
}

const QuestListComponent = (props: QuestListProps) => {
  const { quests } = props;

  return (
    <>
      <h2>Quest List: </h2>
      <table className="quest-list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>XP reward</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {quests.map((quest) => (
            <QuestComponent quest={quest} key={quest.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default QuestListComponent;
