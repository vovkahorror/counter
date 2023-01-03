import React from 'react';
import {ScoreboardScreen} from "./ScoreboardScreen";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setValueAC} from "../../state/values-reducer";

const Scoreboard = () => {
    const STEP = 1;

    const dispatch = useDispatch();

    const startValue = useSelector<AppRootStateType, number>(state => state.values.startValue);
    const maxValue = useSelector<AppRootStateType, number>(state => state.values.maxValue);
    const value = useSelector<AppRootStateType, number>(state => state.values.value);

    const disabledIncButton = value === maxValue;
    const disabledResetButton = value === startValue;

    const increaseCounter = () => {
        value < maxValue && dispatch(setValueAC(value + STEP));
    };

    const resetCounter = () => {
        dispatch(setValueAC(startValue));
    };

    return (
        <div>
            <ScoreboardScreen
                value={value}
                maxValue={maxValue}
            />
            <div className={'buttons_wrapper'}>
                <Button
                    title={'inc'}
                    onClick={increaseCounter}
                    isDisabledButton={disabledIncButton}
                />
                <Button
                    title={'reset'}
                    onClick={resetCounter}
                    isDisabledButton={disabledResetButton}
                />
            </div>
        </div>
    );
};

export default Scoreboard;