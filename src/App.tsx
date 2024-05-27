import './App.css';
import { LevelIndicator, SliderWidget } from './components';

function App() {
    return <div className='App'>
        <div className='first-fold'>
            <div className='slider-widget-wrapper'>
                <SliderWidget />
            </div>
        </div>
        <div className='second-fold'>
            <LevelIndicator />
        </div>
    </div>
}

export default App;
