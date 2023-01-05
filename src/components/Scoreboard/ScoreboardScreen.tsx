import React, {memo} from 'react';
import style from './Scoreboard.module.css';

type ScoreboardScreenPropsType = {
    value: number;
    maxValue: number;
    error: boolean;
    informationMode: boolean;
}

export const ScoreboardScreen = memo((props: ScoreboardScreenPropsType) => {
    const message = props.error ? 'Incorrect value!' : 'Enter values and press "set"';

    const valueClassname = (props.value < props.maxValue) ? style.defaultValue : `${style.defaultValue} ${style.limitValue}`;
    const messageClassname = props.error ? `${style.message} ${style.error}` : style.message;

    return (
        <div className={style.scoreboard}>
            {props.informationMode
                ? <span className={messageClassname}>{message}</span>
                : <span className={valueClassname}>{props.value}</span>}
        </div>
    );
});