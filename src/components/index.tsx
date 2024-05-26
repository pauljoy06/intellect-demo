import { useState } from 'react';

const SliderWidget = (): JSX.Element => {
    const [value, setValue] = useState<number>(5); // Default value set to 5
    const sliderInputStyle = {
        background: `linear-gradient(to right, #6ddce7 ${value*10}%, #fff ${value*10}%)`
    }

    const onThumbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
    };

    return <div className='slider-widget'>
        {false && <div className='circle-slide'>
            <div className='value'>{value}</div>
            <svg className='progress-ring' width='120' height='120'>
                <circle
                    className='progress-ring__circle'
                    stroke='white'
                    strokeWidth='4'
                    fill='transparent'
                    r='52'
                    cx='60'
                    cy='60'
                    style={{
                        strokeDasharray: `${(value / 10) * 327}, 327`,
                    }}
                />
            </svg>
        </div>}
        <input
            className='range-slider'
            type='range'
            min='0'
            max='10'
            value={value}
            onChange={onThumbChange}
            style={sliderInputStyle}
        />
    </div>
}

export {
    SliderWidget,
}
