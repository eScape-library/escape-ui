import classNames from 'classnames/bind';
import styles from './Popup.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Popup({ children, setShowPopup }) {
    const [isOpenP, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(true);
    }, []);
    return (
        <div className={cx('wrapper', { open: isOpenP })}>
            <div
                className={cx('container')}
                style={{
                    transitionDuration: '366ms',
                }}
            >
                <div className={cx('bg')}></div>
                <div className={cx('main-content')}>
                    <div className={cx('content', 'update')}>
                        <div className={cx('wrapper-update')}>
                            {children}
                            <button
                                type="button"
                                className={cx('btn-close')}
                                title="Close"
                                onClick={() => setShowPopup(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                                    <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
