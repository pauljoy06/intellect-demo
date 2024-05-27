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
    const [level, setlevel] = useState(1);

    return <div className='level-indicator'>
        <Trapezium width='100%' />
        <Trapezium width='80%' />
        <Trapezium width='60%' />
        <Trapezium width='40%' />
        <Trapezium width='19%' />
        <div className='bottom-triangle'></div>
    </div>
}

const Trapezium = ({width='30px', height='27px'}: TrapeziumProps): React.JSX.Element => {
    const style={
        width,
        height,
    }

    return <div className='trapezium' style={style}>
    </div>
}

const Triangle = () => {
    return <div className='bottom-triangle'>
    </div>
}

type TrapeziumProps = {
    width?: string,
    height?: string
}

// const LevelIndicator = (): JSX.Element => {
//     const [level, setLevel] = useState(1);
//     const height = 20;
//     const startX = 10;
//     const startY = 10;
//     const topWidth = 80;
//     const baseWidth = 40;
//
//     return <div className='level-indicator'>
//         {/*<div className='second-bottom-triangle'></div>
//         <div className='bottom-triangle'></div>*/}
//
//         <svg width='100%' height='100%' viewBox='0 0 120 120'>
//              <path
//                  d={`
//                     M ${startX} ${startY}
//                     l ${topWidth} 0
//                     q 14 0 4 10
//                     l -20 ${height}
//                     l -${baseWidth} 0
//                     l -20 -${height}
//                     q -13 -10 2 -10
//                  `}
//                  fill='transparent'
//                  stroke='black'
//                  strokeWidth={1}
//              />
//         </svg>
//     </div>
// }

export {
    SliderWidget,
    LevelIndicator
}
