import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Loading = () => {
    return (
        <div className={cx('loadingContainer')}>
            <div className={cx('spinner')}></div>
            <p>Loading</p>
        </div>
    );
};

export default Loading;
