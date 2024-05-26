import { useState } from 'react';

const SliderWidget = (): JSX.Element => {
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
                    stroke='#ccc'
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
                    stroke-dashoffset="2.5"
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

export {
    SliderWidget,
}
