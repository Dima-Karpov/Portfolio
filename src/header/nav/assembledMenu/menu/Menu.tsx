import React, { useCallback, useRef } from 'react';
import { useEffect } from 'react';
import s from './Menu.module.scss'
import { Link } from 'react-scroll';

type MenuT = {
    header: string
    items: string[]
    menu: boolean
    setMenu: any
}

export const Menu: React.FC<MenuT> = React.memo(props => {

    const {
        header,
        items,
        menu,
        setMenu,
    } = props;

    const modalRef = useRef(null);

    const onClickOutsideHandler = useCallback(event => {
        // @ts-ignore
        if (menu && !(modalRef.current && modalRef.current.contains(event.target || null))) {
            setMenu(false);
        }
    }, [menu, modalRef, setMenu]);

    useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler)
        return () => {
            window.removeEventListener('click', onClickOutsideHandler)
        }
    }, [onClickOutsideHandler]);

    return (
        <div className={`${menu ? s.menuActive : s.menu}`}>
            <div className={s.menuContent}>
                <div className={s.menuHeader}>
                    {header}
                </div>
                <div className={s.items}>
                    {items.map((item, index) =>
                        <div key={index} className={s.oneItem}>
                            <Link
                                className={s.link}
                                activeClass={s.active}
                                to={item}
                                spy={true}
                                smooth={true}
                                offset={-99}
                                duration={500}
                            >
                                {item}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})