import React, {ChangeEvent, memo} from 'react';
import styles from './Settings.module.css';

type SettingsScreenPropsType = {
    error: boolean;
    newStartValue: number;
    newMaxValue: number;
    setNewStartValue: (newValue: number) => void;
    setNewMaxValue: (newValue: number) => void;
    setInformationMode: (informationMode: boolean) => void;
}

const SettingsScreen = memo((props: SettingsScreenPropsType) => {
    const onValueChange = (handler: (value: number) => void) => {
        return (e: ChangeEvent<HTMLInputElement>) => {
            handler(+e.currentTarget.value);
            props.setInformationMode(true);
        };
    };

    const inputClassname = props.error ? `${styles.input} ${styles.inputError}` : styles.input;

    return (
        <div className={styles.settingsboard}>
            <div className={styles.settingsboard__item}>
                <span className={styles.text}>max value:</span>
                <input
                    className={inputClassname}
                    onChange={onValueChange(props.setNewMaxValue)}
                    value={props.newMaxValue}
                    type="number"
                />
            </div>
            <div className={styles.settingsboard__item}>
                <span className={styles.text}>start value:</span>
                <input
                    className={inputClassname}
                    onChange={onValueChange(props.setNewStartValue)}
                    value={props.newStartValue}
                    type="number"
                />
            </div>
        </div>
    );
});

export default SettingsScreen;