import React from 'react';
import s from './Button.module.scss'

export const Button = React.memo(() => {
    retrun (
        <a href='' className={s.btn}>{props.text}</a>
    )
})