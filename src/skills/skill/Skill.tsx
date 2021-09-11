import React from 'react';
import s from './Skill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SkillT = {
    title: string
    description: string
    titleIcon: any
};

export const Skill: React.FC<SkillT> = React.memo(props => {
    const {
        title,
        description,
        titleIcon,
    } = props;

    return (
        <div className={s.skill}>
            <div className={s.images}>
                <FontAwesomeIcon icon={titleIcon} className={s.icon} />
            </div>
            <h4>{title}</h4>
            <hr className={s.hR} />
            <p>{description}</p>
        </div>
    );
});
