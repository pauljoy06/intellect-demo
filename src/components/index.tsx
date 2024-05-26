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
        <div className='display-value'>
        </div>
        <div className='range-slider'>
            <input
                className='slider'
                type='range'
                min='0'
                max='10'
                value={value}
                onChange={onThumbChange}
                style={sliderInputStyle}
            />
        </div>
    </div>
}

export {
    SliderWidget,
}
