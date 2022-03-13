import React from 'react'
import s from './Portfolio.module.scss';
import { Title } from '../common/components/title/Title';
import { MyJob } from './job/MyJob';

export const Portfolio = React.memo(() => {

    const jobs = [
        {
            id: 1,
            title: 'Todolist',
            img: 'https://c1.wallpaperflare.com/preview/253/14/507/596ecfc696d13.jpg',
            description: 'TC, React-Redux, RectAPI, Thunk, Saga, Formik, Axios, Unit Test, Storybook, Material UI',
            link: 'https://github.com/Dima-Karpov/Todolist-2.0',
        },
        {
            id: 2,
            title: 'Social-Network',
            img: 'https://c1.wallpaperflare.com/preview/253/14/507/596ecfc696d13.jpg',
            description: 'TS, React-Redux, RestAPI, Axios, Thunk, Redux-Form, Unit Tests',
            link: 'https://github.com/Dima-Karpov/Social-network',
        },
        {
            id: 3,
            title: 'Counter',
            img: 'https://c1.wallpaperflare.com/preview/253/14/507/596ecfc696d13.jpg',
            description: 'TS, React-Redux',
            link: 'https://Dima-Karpov.github.io/counter',
        },
        {
            id: 4,
            title: 'Portfolio',
            img: 'https://c1.wallpaperflare.com/preview/253/14/507/596ecfc696d13.jpg',
            description: 'TS, React, Axios',
            link: 'https://Dima-Karpov.github.io/Portfolio',
        },
        {
            id: 5,
            title: 'Short links',
            img: 'https://c1.wallpaperflare.com/preview/253/14/507/596ecfc696d13.jpg',
            description: 'TS, React, Axios',
            link: 'https://Dima-Karpov.github.io/Short',
        },
        {
            id: 6,
            title: 'Equalizer landing page',
            img: 'https://c1.wallpaperflare.com/preview/253/14/507/596ecfc696d13.jpg',
            description: 'TS, React, SCSS',
            link: 'link #1',
        },
        {
            id: 7,
            title: 'Cards',
            img: 'https://c1.wallpaperflare.com/preview/253/14/507/596ecfc696d13.jpg',
            description: 'TS, React, SCSS, RestAPI, Axios, Thunk, Redux-Form, Unit Tests',
            link: 'link #1',
        },
        {
            id: 8,
            title: 'Future project',
            img: 'https://c1.wallpaperflare.com/preview/253/14/507/596ecfc696d13.jpg',
            description: 'new technologies...',
            link: 'link #1',
        },
        {
            id: 9,
            title: 'Future project',
            img: 'https://c1.wallpaperflare.com/preview/253/14/507/596ecfc696d13.jpg',
            description: 'new technologies...',
            link: 'link #1',
        },
    ];


    return (
        <div className={s.portfolioBlock} id='portfolio'>
            <div className={s.portfolioContainer}>
                <Title text={'Portfolio'} />
                <div className={s.portfolioJobs}>
                    {
                        jobs.map(j => <MyJob
                            key={j.id}
                            title={j.title}
                            img={j.img}
                            description={j.description}
                            link={j.link}
                        />)
                    }
                </div>

            </div>
        </div>
    )
});