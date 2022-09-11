import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import { BiHomeAlt, BiMoviePlay, BiInfoCircle } from 'react-icons/bi';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultIconSize = '1.875rem';

function NavItem() {
    const items = [
        { label: 'Home', icon: <BiHomeAlt size={defaultIconSize} />, active: true },
        { label: 'Movie', icon: <BiMoviePlay size={defaultIconSize} />, active: false },
        { label: 'About', icon: <BiInfoCircle size={defaultIconSize} /> },
    ];

    return (
        <>
            {/* Nền xanh , màu trắng  */}
            {items.map((item, index) => (
                <li
                    className={cx(
                        `flex p-2 justify-end items-center cursor-pointer${
                            item.active ? ' bg-primary text-white' : ''
                        } `,
                    )}
                >
                    <h3 className="mr-2">{item.label}</h3>
                    {item.icon}
                </li>
            ))}
        </>
    );
}

export default NavItem;
