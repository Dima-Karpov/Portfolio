import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import s from './AssembledMenu.module.scss'
import { Menu } from './menu/Menu';

type AssembledMeneT = {
    items: string[]
}

export const AssembledMene: React.FC<AssembledMeneT> = React.memo(props => {

    const [menu, setMenu] = useState<boolean>(false);
    const click = () => setMenu(!menu);

    return (
        <>
            <div className={s.burgerBtn} onClick={click}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <Menu
                header='menu'
                items={props.items}
                menu={menu}
                setMenu={setMenu}
            />
        </>
    )
})