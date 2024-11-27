import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification({ title, product = {}, duration = 3, callback = () => {} }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            callback(false);
        }, duration * 1000);
        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={cx('wrapper')}>
            <button type="button" className={cx('btn-close')} title="Close" onClick={() => setIsVisible(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                    <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                </svg>
            </button>
            <div>
                <p className={cx('title')}>{title}</p>
                <div className={cx('main-content')}>
                    <div className={cx('image')}>
                        <img src={product.productImage} alt="" />
                    </div>
                    <div className={cx('detail')}>
                        <p className={cx('product-name')}>{product.productName}</p>
                        <p className={cx('price')}>{product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;
