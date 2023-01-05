import React, {memo} from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    title: string;
    onClick: () => void;
    isDisabledButton: boolean
}

export const Button = memo((props: ButtonPropsType) => {
    console.log('btn');
    return (
        <button className={style.button} onClick={props.onClick} disabled={props.isDisabledButton}>
            {props.title}
        </button>
    );
});