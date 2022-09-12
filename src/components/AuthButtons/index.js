import classNames from 'classnames/bind';
import style from './AuthButtons.module.scss';
const cx = classNames.bind(style);

// 4 : 1 rem : 16px
function AuthButtons() {
    // Từ kích cỡ màn hình lớn : md: ít nhất 768 là justify end
    // Còn bình thường là ở giữa
    return (
        <div className={cx('flex justify-center md:justify-end')}>
            {/* Kích thước ảnh : 250 x 360px */}
            <button className={cx('btn mr-2 ')}>Login</button>
            <button className={cx('btn')}>Register</button>
        </div>
    );
}

export default AuthButtons;
