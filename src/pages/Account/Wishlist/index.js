import Product from '../../../components/Product';

import classNames from 'classnames/bind';
import styles from './Wishlist.module.scss';

const cx = classNames.bind(styles);

function Wishlist() {
    return (
        <div>
            <div className={cx('heading-account-recently')}>
                <div className={cx('title-account-recently')}>Danh sách yêu thích</div>
            </div>
            <div>
                <div className={cx('content-account-wishlist')}>
                    <Product className={cx('product-loop')} />
                    <Product className={cx('product-loop')} />
                    <Product className={cx('product-loop')} />
                    <Product className={cx('product-loop')} />
                    <Product className={cx('product-loop')} />
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
