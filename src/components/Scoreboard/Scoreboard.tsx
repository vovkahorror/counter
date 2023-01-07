import React, {memo, useCallback} from 'react';
import {ScoreboardScreen} from "./ScoreboardScreen/ScoreboardScreen";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setValueAC} from "../../state/values-reducer";

type ScoreboardPropsType = {
    value: number;
    error: boolean;
}

const Scoreboard = memo((props: ScoreboardPropsType) => {
    const STEP = 1;

    const dispatch = useDispatch();

    const startValue = useSelector<AppRootStateType, number>(state => state.values.startValue);
    const maxValue = useSelector<AppRootStateType, number>(state => state.values.maxValue);

    const informationMode = useSelector<AppRootStateType, boolean>(state => state.common.isInformationMode);

    const disabledIncButton = props.value === maxValue || informationMode;
    const disabledResetButton = props.value === startValue || informationMode;

    const increaseCounter = useCallback(() => {
        props.value < maxValue && dispatch(setValueAC(props.value + STEP));
    }, [dispatch, maxValue, props.value]);

    const resetCounter = useCallback(() => dispatch(setValueAC(startValue)), [dispatch, startValue]);

    return (
        <div className={'counter_wrapper'}>
            <ScoreboardScreen
                value={props.value}
                maxValue={maxValue}
                error={props.error}
                informationMode={informationMode}
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
});

export default Scoreboard;