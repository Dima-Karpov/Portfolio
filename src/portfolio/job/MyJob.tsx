import React from 'react';
import s from './MyJob.module.scss';

type MyJobT = {
    img?: string
    description?: string
    link?: string
    title?: string
}


export const MyJob: React.FC<MyJobT> = React.memo(props => {
    const {
        title,
        description,
        img,
        link,
    } = props;

    return (
        <div className={s.project}>
            <div className={s.imgBlock} style={{ backgroundImage: `url(${img})` }}>
                <div className={s.overlay}>
                    <div className={s.descriptionBlock}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={link} className={s.btn} target="_blank" rel="noreferrer">view project</a>
                    </div>
                </div>
            </div>
        </div>
    )
})