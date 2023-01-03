import React, {useEffect} from 'react';
import './App.css';
import {ScoreboardScreen} from "./components/Scoreboard/ScoreboardScreen";
import {Button} from "./components/Button/Button";
import SettingsScreen from "./components/Settingsboard/SettingsScreen";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

function App() {
    /*const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [value, setValue] = useState(startValue);
    const [newStartValue, setNewStartValue] = useState(startValue);
    const [newMaxValue, setNewMaxValue] = useState(maxValue);
    const [informationMode, setInformationMode] = useState(false);*/

    // useEffect(() => {
    //     const startValueAsString = localStorage.getItem('counterStartValue');
    //     startValueAsString && setStartValue(JSON.parse(startValueAsString));
    //
    //     const maxValueAsString = localStorage.getItem('counterMaxValue');
    //     maxValueAsString && setMaxValue(JSON.parse(maxValueAsString));
    //
    //     const newStartValueAsString = localStorage.getItem('counterNewStartValue');
    //     newStartValueAsString && setNewStartValue(JSON.parse(newStartValueAsString));
    //
    //     const newMaxValueAsString = localStorage.getItem('counterNewMaxValue');
    //     newMaxValueAsString && setNewMaxValue(JSON.parse(newMaxValueAsString));
    //
    //     const currentValueAsString = localStorage.getItem('counterValue');
    //     currentValueAsString && setValue(JSON.parse(currentValueAsString));
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterStartValue', JSON.stringify(startValue));
    //     localStorage.setItem('counterMaxValue', JSON.stringify(maxValue));
    //     localStorage.setItem('counterNewStartValue', JSON.stringify(newStartValue));
    //     localStorage.setItem('counterNewMaxValue', JSON.stringify(newMaxValue));
    //     localStorage.setItem('counterValue', JSON.stringify(value));
    // }, [startValue, maxValue, newStartValue, newMaxValue, value]);

    const newStartValue = useSelector<AppRootStateType, number>(state => state.newValues.newStartValue);
    const newMaxValue = useSelector<AppRootStateType, number>(state => state.newValues.newMaxValue);


    const error = newStartValue < 0 || newMaxValue <= newStartValue;






    const setCounter = () => {
        setStartValue(newStartValue);
        setMaxValue(newMaxValue);
        changeScoreboard();
    };

    const changeScoreboard = () => {
        value < newStartValue && setValue(newStartValue);
        value > newMaxValue && setValue(newMaxValue);
        setInformationMode(false);
    };



    return (
        <div className={'App'}>
            <div className={'counter_wrapper'}>

            </div>

            <div className={'counter_wrapper'}>
                <SettingsScreen
                    error={error}
                    newStartValue={newStartValue}
                    newMaxValue={newMaxValue}
                    setNewStartValue={setNewStartValue}
                    setNewMaxValue={setNewMaxValue}
                    setInformationMode={setInformationMode}
                />
                <div className={'buttons_wrapper'}>
                    <Button
                        title={'set'}
                        onClick={setCounter}
                        isDisabledButton={error}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
