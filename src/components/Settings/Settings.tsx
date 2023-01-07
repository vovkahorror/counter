import React, {memo, useCallback, useEffect} from 'react';
import SettingsScreen from "./SettingsScreen/SettingsScreen";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setNewMaxValueAC, setNewStartValueAC} from "../../state/newValues-reducer";
import {setErrorAC, setInformationModeAC} from "../../state/common-reducer";
import {setMaxValueAC, setStartValueAC, setValueAC} from "../../state/values-reducer";

type SettingsPropsType = {
    value: number;
    error: boolean;
}

const Settings = memo((props: SettingsPropsType) => {
    const dispatch = useDispatch();

    const newStartValue = useSelector<AppRootStateType, number>(state => state.newValues.newStartValue);
    const newMaxValue = useSelector<AppRootStateType, number>(state => state.newValues.newMaxValue);

    const setNewStartValue = useCallback((value: number) => dispatch(setNewStartValueAC(value)), [dispatch]);

    const setNewMaxValue = useCallback((value: number) => dispatch(setNewMaxValueAC(value)), [dispatch]);

    const setInformationMode = useCallback(() => dispatch(setInformationModeAC(true)), [dispatch]);

    const changeScoreboard = useCallback(() => {
        props.value < newStartValue && dispatch(setValueAC(newStartValue));
        props.value > newMaxValue && dispatch(setValueAC(newMaxValue));
        dispatch(setInformationModeAC(false));
    }, [dispatch, newMaxValue, newStartValue, props.value]);

    const setCounter = useCallback(() => {
        dispatch(setStartValueAC(newStartValue));
        dispatch(setMaxValueAC(newMaxValue));
        changeScoreboard();
    }, [dispatch, newStartValue, newMaxValue, changeScoreboard]);

    useEffect(() => {
        (newStartValue < 0 || newMaxValue <= newStartValue)
            ? dispatch(setErrorAC(true))
            : dispatch(setErrorAC(false));
    }, [dispatch, newStartValue, newMaxValue]);

    return (
        <div className={'counter_wrapper'}>
            <SettingsScreen
                error={props.error}
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
                    isDisabledButton={props.error}
                />
            </div>
        </div>
    );
});

export default Settings;