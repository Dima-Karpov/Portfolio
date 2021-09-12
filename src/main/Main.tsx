import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import s from './Main.module.scss';
import photo from '../assets/image/photo.jpg'

export const Main: React.FC = React.memo(() => {
    return (
        <div className={s.mainBlock} id='home'>
            <div className={s.container}>
                <div className={s.block}>
                    <h5>Hello, my name is</h5>
                    <h1>Dima Karpov</h1>
                    <ReactTypingEffect
                        text={'Frontend Developer'}
                        typingDelay={500}
                    />
                </div>
            </div>
            <div className={s.photo}>
                <img src={photo} alt={'It\'s me'} />

            </div>
        </div>

    )
});