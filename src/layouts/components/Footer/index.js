import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <h4 className={cx('content')}>© 2022 - 2023 eScape - All rights reserved.</h4>
            <div className={cx('contact')}>
                <h4 className={cx('des')}>Thông tin liên hệ:</h4>

                <p className={cx('email')}>thuhadev@gmail.com</p>
            </div>
        </footer>
    );
}

export default Footer;
