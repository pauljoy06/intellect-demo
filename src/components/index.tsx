import React, { useState } from 'react';

const SliderWidget = (): React.JSX.Element => {
    const [value, setValue] = useState<number>(5); // Default value set to 5
    
    // To recalculate the fill area for slider
    const sliderInputStyle = {
        background: `linear-gradient(to right, #6ddce7 ${value*10}%, #fff ${value*10}%)`
    }

    return <div className='slider-widget'>
        <div className='display-value'>
            <svg
                className='progress-ring'
                width='100%'
                height='100%'
                viewBox='0 0 100 100'
            >
                <circle
                    stroke='rgba(204, 204, 204, 0.4)'
                    strokeWidth='.5'
                    strokeLinecap='round'
                    fill='transparent'
                    r='49'
                    cx='50'
                    cy='50'
                    strokeDasharray='7'
                />
                <circle
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    fill='rgba(204, 204, 204, 0.2)'
                    r='40'
                    cx='50'
                    cy='50'
                    pathLength='10'
                    strokeDasharray={`${value} ${10 - value}`}
                    strokeDashoffset='2.5'
                />
                <circle
                    fill='#6fdbe7'
                    r='30'
                    cx='50'
                    cy='50'
                />
                <text x='50' y='50'
                    textAnchor='middle'
                    dominantBaseline='middle'
                    fill='white'
                    fontSize='20'
                >
                    {value}
                </text>
            </svg>
        </div>
        <div className='range-slider'>
            <input
                className='slider'
                type='range'
                min='0'
                max='10'
                value={value}
                onChange={e => setValue(Number(e.target.value))}
                style={sliderInputStyle}
            />
        </div>
    </div>
}


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

const Trapezium = ({width='30px', height='39px', className, onClick}: TrapeziumProps): React.JSX.Element => {
    const style={
        width,
        height,
    }

    return <div className={`trapezium${className}`}
        style={style}
        onClick={onClick}
    />
}

type TrapeziumProps = {
    className?: string,
    width?: string,
    height?: string,
    onClick?: () => void,
}

export {
    SliderWidget,
    LevelIndicator
}
