import React, { useState } from 'react';
import Trapezium from '../trapezium';
import './index.css';

const LevelIndicator = (): React.JSX.Element => {
    const [selectedLevel, setSelectedLevel] = useState(3);
    const levels = [
        { value: 5, width: '70%' },
        { value: 4, width: '55%' },
        { value: 3, width: '40%' },
        { value: 2, width: '25%' }
    ];
    let label = '';
    if (selectedLevel <= 2) {
        label = 'Low';
    } else if (selectedLevel <= 4) {
        label = 'Medium';
    } else {
        label = 'High';
    }

    return <div className='level-indicator'>
        <div className='label'>{label}</div>
        {levels.map(level => <Trapezium
            className={`${selectedLevel >= level.value ? ' level-active' : ''}`}
            width={level.width}
            onClick={() => setSelectedLevel(level.value)}
            
            key={level.value}
        />)}
        <div className={`bottom-triangle${selectedLevel >= 1 ? ' level-active' : ''}`} />
    </div>
}

export default LevelIndicator;
