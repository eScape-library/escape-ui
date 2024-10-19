import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Order() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab-description')}>
                <div className={cx('item-tab-des', 'active')}>TẤT CẢ</div>
                <div className={cx('item-tab-des')}>CHỜ GIAO HÀNG</div>
                <div className={cx('item-tab-des')}>HOÀN THÀNH</div>
                <div className={cx('item-tab-des')}>ĐÃ HỦY</div>
            </div>
            <div className={cx('tab-content')}>
                <div className={cx('order')}>
                    <div className={cx('order-header')}>
                        <h2>HOÀN THÀNH</h2>
                    </div>
                    <div className={cx('order-items')}>
                        <div className={cx('box-media-item-cart')}>
                            <div className={cx('box-media')}>
                                <div className={cx('img-media')}>
                                    <a href="#">
                                        <img
                                            src="//product.hstatic.net/200000642007/product/50bks_3fpqb0141_1_091a98ed89ef44debd6bb01e590311bb_30f46fcba6bc4f81aee39613a13bb309_medium.jpg "
                                            alt="MLB - Áo polo nữ cổ bẻ tay dài Basic Small Logo"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className={cx('box-info')}>
                                <div className={cx('box-info-inner')}>
                                    <div className={cx('title-item')}>
                                        <a href="#">MLB - Áo polo nữ cổ bẻ tay dài Basic Small Logo</a>
                                    </div>
                                    <div className={cx('variant-item')}>50BKS / M / 3FPQB0141</div>
                                    <div className={cx('quantity-item')}>Số lượng: 1</div>
                                </div>
                                <div className={cx('box-info-price')}>
                                    <div className={cx('price-item')}>
                                        <span>2,590,000₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('order-footer')}>
                        <div className={cx('order-total')}>
                            <p>Thành tiền: </p>
                            <h2>3,500,000₫</h2>
                        </div>
                        <div className={cx('order-action')}>
                            <Button fullfill>Mua lại</Button>
                            <Button defaultBtn>Đánh giá</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
