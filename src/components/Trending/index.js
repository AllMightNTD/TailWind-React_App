import classNames from 'classnames/bind';
import style from './Trending.module.scss';
import axios from 'axios';
import { moviesData } from './MovieData';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
const cx = classNames.bind(style);
function Trending() {
    const [noOfElement, setnoOfElement] = useState(4);
    const [data, setData] = useState([]);

    // Cắt data thành 4 data trên 1 hàng

    // Get API
    useEffect(() => {
        axios
            .get('http://localhost:5000')
            .then((res) => setData(res.data))
            .catch((error) => console.log(error));
    }, []);

    const splice = data.slice(0, noOfElement);

    // mt:margin-top
    // mb : margin-bottom
    // pb : padding-bottom

    // Sử dụng hàm loadMore để load thêm 4 data nữa
    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement);
    };
    return (
        <>
            <h3 className={cx('border-b border-primary mt-12 mb-6 pb-4')}>Trending</h3>
            {/* Chia làm 4 cột */}
            {/* The movie */}
            {/* Từ kích cỡ màn hình md trở lên mới là 4 cột */}
            {/* Bình thường là 2 cột */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 ">
                {splice.map((movie, index) => (
                    <MovieCard data={movie} key={index}></MovieCard>
                ))}
            </div>
            <div className={cx('flex justify-center')}>
                {/* duration : thời gian trễ */}

                <button className={cx('btn hover:scale-125 transition ease-out duration-500')} onClick={loadMore}>
                    Load more
                </button>
            </div>
        </>
    );
}

export default Trending;
