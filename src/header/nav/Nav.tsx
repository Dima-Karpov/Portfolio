import React from 'react';
import s from './Nav.module.scss';
import { Link } from "react-scroll";
import { AssembledMene } from './assembledMenu/AssembledMenu';

export const Nav: React.FC = React.memo(() => {
    const items: string[] = ['home', 'skills', 'portfolio', 'contactMe'];

    return (
        <div className={ s.nav } >
            <div className={ s.container }>
                { items.map((item, index) =>
                    <Link
                        key={ index }
                        className={ s.link }
                        activeClass={ s.active }
                        to={ item }
                        spy={ true }
                        smooth={ true }
                        offset={ -99 }
                        duration={ 500 }
                    >
                        { item }
                    </Link>
                ) }
                <AssembledMene items={ items } />
            </div>
        </div>
    )
});

