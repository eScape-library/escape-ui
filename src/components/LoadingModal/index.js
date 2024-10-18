import classNames from 'classnames/bind';
import styles from './LoadingModal.module.scss';

const cx = classNames.bind(styles);

const LoadingModal = ({ show }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={cx('loadingModalOverlay')}>
            <div className={cx('spinner')}></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingModal;
