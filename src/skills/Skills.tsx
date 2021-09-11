import React from 'react';
import s from './Skills.module.scss'
import { Title } from '../common/components/title/Title';
import { Skill } from './skill/Skill';
import { faBriefcase, faLaptopCode, faTasks } from "@fortawesome/free-solid-svg-icons";


export const Skills = React.memo(() => {
    return (
        <div className={s.skillsBlock} id='skills'>
            <div className={s.skillsContainer}>
                <Title text='Skills' />
                <div className={s.skills}>
                    <Skill title={'FOUNDATION'} description={"JavaScript, TypeScript, HTML5, CSS3"} titleIcon={faBriefcase} />
                    <Skill title={'DEVELOPMENT'} description={"React, Redux, AXIOS, Formic etc"} titleIcon={faLaptopCode} />

                    <Skill title={'TESTING'} description={"Unit Tests, Storybook, SnapShot"} titleIcon={faTasks} />
                    <Skill title={'DESIGN'} description={"Material UI, Ant-Design etc"} titleIcon={faTasks} />
                </div>
            </div>
        </div>
    )
});