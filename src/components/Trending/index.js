import classNames from 'classnames/bind';
import style from './Trending.module.scss';
import { moviesData } from './MovieData';
import MovieCard from './MovieCard';
const cx = classNames.bind(style);
function Trending() {
    // mt:margin-top
    // mb : margin-bottom
    // pb : padding-bottom
    return (
        <>
            <h3 className={cx('border-b border-primary mt-12 mb-6 pb-4')}>Trending</h3>
            {/* Chia làm 4 cột */}
            {/* The movie */}
            {/* Từ kích cỡ màn hình md trở lên mới là 4 cột */}
            {/* Bình thường là 2 cột */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 ">
                {moviesData.map((movie, index) => (
                    <MovieCard data={movie} key={index}></MovieCard>
                ))}
            </div>
            <div className={cx('flex justify-center')}>
                {/* duration : thời gian trễ */}

                <button className={cx('btn hover:scale-125 transition ease-out duration-500')}>load more</button>
            </div>
        </>
    );
}

export default Trending;
