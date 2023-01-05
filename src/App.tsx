import React, {useEffect} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Settings from "./components/Settings/Settings";

function App() {
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

    const value = useSelector<AppRootStateType, number>(state => state.values.value);

    const error = useSelector<AppRootStateType, boolean>(state => state.common.isError);

    return (
        <div className={'App'}>
            <div className={'counter_wrapper'}>
                <Scoreboard value={value} error={error}/>
            </div>

            <div className={'counter_wrapper'}>
                <Settings value={value} error={error}/>
            </div>
        </div>
    );
}

export default App;
