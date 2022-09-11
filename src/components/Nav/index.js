import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import NavItem from './NavItem';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
const defaultIconsize = '1.875rem';
const cx = classNames.bind(styles);
function Nav() {
    const [isNavMobile, setisNavMobile] = useState(false);
    return (
        <div className={cx('Container col col-span-1 bg-cyan-200')}>
            {/* margin theo chiều ngang là 16 */}
            {/* Bình thường trên mobile lệch trái , màn hình lớn lệch phải */}
            <div className={cx('flex mx-4 justify-between items-center md:block')}>
                <h4 className={cx('  uppercase text-primary py-4 border-b border-primary text-right font-bold')}>
                    MEPhim.Net
                </h4>

                <FaBars
                    className={cx(' block md:hidden text-xl cursor-pointer')}
                    size={defaultIconsize}
                    // Onclick => set thành true để hiện menuBars
                    // Nếu đang true => false để ẩn
                    // Nếu đang false => thành true để hiện
                    onClick={() => setisNavMobile(!isNavMobile)}
                />
            </div>
            {/* mx: margin theo chiều ngang */}
            {/* 4 : 1 rem */}
            {/* Ân trên di động , hiện trên medium */}
            <ul className={cx(`mx-4 my-2 ${isNavMobile ? '' : 'hidden'} md:block`)}>
                <NavItem />
            </ul>
        </div>
    );
}

export default Nav;
