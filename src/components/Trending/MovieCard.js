import classNames from 'classnames/bind';
import style from './Trending.module.scss';
import { BiTime } from 'react-icons/bi';
const cx = classNames.bind(style);
function MovieCard({ data, key }) {
    console.log(data.src);
    return (
        <div className={cx('btn-card')}>
            <img src={data.src} className={cx('w-full')} alt={data.main} />
            <div className={cx('p-4 text-white')}>
                <h4>{data.title}</h4>
                <p>{data.main}</p>
            </div>
            <div className={cx('btn-card_content')}>
                <BiTime />
                {data.runtime}
            </div>
        </div>
    );
}

export default MovieCard;
