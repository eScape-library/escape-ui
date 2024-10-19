import classNames from 'classnames/bind';
import styles from './Recently.module.scss';
import Product from '../../../components/Product';

const cx = classNames.bind(styles);

function Recently() {
    return (
        <div>
            <div className={cx('heading-account-recently')}>
                <div className={cx('title-account-recently')}>12 sản phẩm đã xem gần nhất</div>
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

export default Recently;
