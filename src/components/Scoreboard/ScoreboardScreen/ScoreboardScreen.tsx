import React, {memo} from 'react';
import styles from './ScoreboardScreen.module.scss';

type ScoreboardScreenPropsType = {
    value: number;
    maxValue: number;
    error: boolean;
    informationMode: boolean;
}

export const ScoreboardScreen = memo((props: ScoreboardScreenPropsType) => {
    const message = props.error ? 'Incorrect value!' : 'Enter values and press "set"';

    const messageClassname = `${styles.message} ${props.error ? styles.error : ''}`;
    const valueClassname = `${styles.defaultValue} ${props.value === props.maxValue ? styles.limitValue : ''}`;

    return (
        <div className={styles.scoreboard}>
            {props.informationMode
                ? <span className={messageClassname}>{message}</span>
                : <span className={valueClassname}>{props.value}</span>}
        </div>
    );
});