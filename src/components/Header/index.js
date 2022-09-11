import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return <h1 className={cx('mt-6 text-cyan-900')}>Header</h1>;
}

export default Header;
