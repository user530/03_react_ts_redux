import React from 'react';
import './styles/Quest.css';
import { useAppDispatch } from '../app/hooks';
import {
  toggleQuestComplete,
  removeQuest,
} from '../features/quests/questsSliceTS';

interface QuestProps {
  quest: {
    id: number;
    name: string;
    location: string;
    xp: number;
    completed: boolean;
  };
}

const QuestComponent = (props: QuestProps) => {
  const { id, name, location, xp, completed } = props.quest;

  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(toggleQuestComplete({ questId: id }));
  };

  const deleteHandler = () => {
    dispatch(removeQuest({ questId: id }));
  };

  return (
    <tr className={`quest ${completed ? 'completed' : ''}`}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{location}</td>
      <td>{xp}</td>

      <td>
        <button
          onClick={toggleHandler}
          className={completed ? 'reset-quest' : 'complete-quest'}
        >
          {completed ? 'Reset quest' : 'Mark as completed'}
        </button>
      </td>

      <td>
        <button onClick={deleteHandler} className="delete-quest">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default QuestComponent;
