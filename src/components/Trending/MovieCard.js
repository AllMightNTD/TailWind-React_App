import classNames from 'classnames/bind';
import style from './Trending.module.scss';
import { BiTime } from 'react-icons/bi';
const cx = classNames.bind(style);
function MovieCard({ data, key }) {
    console.log(data.image);
    return (
        <div className={cx('btn-card')}>
            <img src={data.image} className={cx('w-full')} alt={data.name} />
            <div className={cx('p-4 text-white')}>
                <h4>{data.author}</h4>
                <p>{data.name}</p>
            </div>
            <div className={cx('btn-card_content')}>
                <BiTime />
                {data.time}
            </div>
        </div>
    );
}

export default MovieCard;
