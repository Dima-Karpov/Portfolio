import React from 'react';
import s from './Footer.module.scss';

export const Footer = React.memo(() => {

    const items = [
        { id: 1, href: 'https://t.me/D_i_M_a_karpov', title: 'telegram' },
        { id: 2, href: 'https://www.codewars.com/users/dimkacarpov2021', title: 'codewars' },
        { id: 3, href: 'https://github.com/Dima-Karpov', title: 'git' },
        { id: 4, href: 'https://www.linkedin.com/in/dima-karpov-81730421a/', title: 'linkedIn' },
    ];

    return (
        <div className={s.footerBlock}>
            <p className={s.rights}>&#169; 2021 copyright, all right reserved</p>
            <ul>
                {items.map(i =>
                    <li key={i.id}>
                        <a href={i.href} target='blank' rel='noreferrer'>
                            {i.title}
                        </a>
                    </li>)}
            </ul>

        </div>
    )
});