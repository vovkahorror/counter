import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Settings from './components/Settings/Settings';

function App() {
    const value = useSelector<AppRootStateType, number>(state => state.values.value);

    const error = useSelector<AppRootStateType, boolean>(state => state.common.isError);

    return (
        <div className={'App'}>
            <Settings value={value} error={error}/>
            <Scoreboard value={value} error={error}/>
        </div>
    );
}

export default App;
