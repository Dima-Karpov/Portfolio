import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import s from './Main.module.scss';

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
                <img src={'https://oir.mobi/uploads/posts/2021-03/thumbs/1616700535_22-p-samurai-krasivo-25.jpg'} alt={'It\'s me'} />

            </div>
        </div>

    )
});