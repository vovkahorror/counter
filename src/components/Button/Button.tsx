import React, {memo} from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
    title: string;
    onClick: () => void;
    isDisabledButton: boolean
}

export const Button = memo((props: ButtonPropsType) => {
    return (
        <button className={style.button} onClick={props.onClick} disabled={props.isDisabledButton}>
            {props.title}
        </button>
    );
});