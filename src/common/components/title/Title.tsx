import React from 'react'
import s from './Title.module.scss';

type TitleT = {
    text: string
}

export const Title: React.FC<TitleT> = React.memo(props => {
    return (
        <div className={s.title}>
            <h2>{props.text}</h2>
        </div>
    )
});