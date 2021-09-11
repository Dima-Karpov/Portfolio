import React from 'react';
import s from './Header.module.scss';
import { Nav } from './nav/Nav';

export const Header: React.FC = React.memo(() => {
    return (
        <div className={s.header} >
            
            <Nav />
        </div>
    )
});