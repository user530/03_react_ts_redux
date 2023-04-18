import React from 'react';

interface QuestProps {
    quest: {
        id: number;
        name: string;
        location: string;
        xp: number;
        completed: boolean;
    }
}

const QuestComponent = (props: QuestProps) => {
    const {id, name, location, xp, completed} = props.quest;

    return (
        <li className={`quest ${completed ? 'completed' : ''}` }>
            <span>{name}</span>
            <span>{location}</span>
            <span>{xp}</span>
        </li>
    )
}

export default QuestComponent;