import React, {memo} from 'react';
import styles from './ScoreboardScreen.module.css';

type ScoreboardScreenPropsType = {
    value: number;
    maxValue: number;
    error: boolean;
    informationMode: boolean;
}

export const ScoreboardScreen = memo((props: ScoreboardScreenPropsType) => {
    const message = props.error ? 'Incorrect value!' : 'Enter values and press "set"';

    const valueClassname = (props.value < props.maxValue) ? styles.defaultValue : `${styles.defaultValue} ${styles.limitValue}`;
    const messageClassname = props.error ? `${styles.message} ${styles.error}` : styles.message;

    return (
        <div className={styles.scoreboard}>
            {props.informationMode
                ? <span className={messageClassname}>{message}</span>
                : <span className={valueClassname}>{props.value}</span>}
        </div>
    );
});