import React from 'react';
import { Quest } from '../models';
import QuestComponent from './Quest';

interface QuestListProps {
    quests: Quest[]
}

const QuestListComponent = (props: QuestListProps) => {
    const {quests} = props;

    return (
        <>
        <h2>Quest List component</h2>  
            <ul className="quest-list">
                {
                    quests.map(quest => (<QuestComponent quest={quest} key={quest.id}/>))
                }
            </ul>
        </>
    )
}

export default QuestListComponent;