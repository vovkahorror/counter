import React from 'react';
import style from './Scoreboard.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

type ScoreboardScreenPropsType = {
    value: number;
    maxValue: number;
}

export const ScoreboardScreen = (props: ScoreboardScreenPropsType) => {
    const error = useSelector<AppRootStateType, boolean>(state => state.common.isError);
    const informationMode = useSelector<AppRootStateType, boolean>(state => state.common.isInformationMode);

    const message = error ? 'Incorrect value!' : 'Enter values and press "set"';

    const valueClassname = (props.value < props.maxValue) ? style.defaultValue : `${style.defaultValue} ${style.limitValue}`;
    const messageClassname = error ? `${style.message} ${style.error}` : style.message;

    return (
        <div className={style.scoreboard}>
            {informationMode
                ? <span className={messageClassname}>{message}</span>
                : <span className={valueClassname}>{props.value}</span>}
        </div>
    );
};