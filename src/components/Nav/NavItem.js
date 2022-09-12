import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import { BiHomeAlt, BiMoviePlay, BiInfoCircle } from 'react-icons/bi';
import React from 'react';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultIconSize = '1.875rem';

function NavItem() {
    const items = [
        { label: 'Home', icon: <BiHomeAlt size={defaultIconSize} /> },
        { label: 'Movie', icon: <BiMoviePlay size={defaultIconSize} /> },
        { label: 'About', icon: <BiInfoCircle size={defaultIconSize} /> },
    ];
    // Để mặc định là Home => set mặc định vào Home
    const [isActive, setIsActive] = useState('Home');
    // Hàm xử lý onClick => isActive = label
    const handleActive = (label) => {
        setIsActive(label);
    };
    console.log(isActive);
    // Hàm kiểm tra để thay đổi màu
    // Nếu isActive === labelActive (màu chỉ định của className trong hàm map) => set Màu và Color
    const handleColorActive = (labelActive) => {
        if (isActive === labelActive) {
            return ' bg-primary text-white';
        } else {
            return '';
        }
    };
    return (
        <>
            {/* Nền xanh , màu trắng  */}
            {items.map((item, index) => (
                <li
                    onClick={() => handleActive(item.label)}
                    className={cx(`flex p-2 justify-end items-center cursor-pointer${handleColorActive(item.label)} `)}
                >
                    <h3 className="mr-2">{item.label}</h3>
                    {item.icon}
                </li>
            ))}
        </>
    );
}

export default NavItem;
