import { useState } from 'react';
import Popup from '../../components/Popup';

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import UpdateCart from '../../components/UpdateCart';
const cx = classNames.bind(styles);

function Cart() {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-wrapper-cart')}>
                <div className={cx('main-cart')}>
                    <div className={cx('heading-cart')}>
                        <input type="checkbox" className={cx('select-all')} />
                        <span>Chọn tất cả</span>
                    </div>
                    <div className={cx('body-cart')}>
                        <div className={cx('item-cart')}>
                            <div className={cx('box-media-item-cart')}>
                                <div className={cx('box-media')}>
                                    <div className={cx('input-line')}>
                                        <input className={cx('input-item-line')} type="checkbox" />
                                    </div>
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
                                        <div className={cx('price-item')}>
                                            <span>2,590,000₫</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('box-action-item-cart')}>
                                <div className={cx('line-box-action')}>
                                    <a
                                        href="javascript:void(0);"
                                        className={cx('change-option')}
                                        onClick={() => setShowPopup(!showPopup)}
                                    >
                                        Thay đổi tùy chọn
                                    </a>
                                    <a href="@" className={cx('delete-option')}>
                                        Xóa
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item-cart')}>
                            <div className={cx('box-media-item-cart')}>
                                <div className={cx('box-media')}>
                                    <div className={cx('input-line')}>
                                        <input className={cx('input-item-line')} type="checkbox" />
                                    </div>
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
                                        <div className={cx('price-item')}>
                                            <span>2,590,000₫</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('box-action-item-cart')}>
                                <div className={cx('line-box-action')}>
                                    <a
                                        href="javascript:void(0);"
                                        className={cx('change-option')}
                                        data-url="/products/mlb-ao-polo-nu-co-be-tay-dai-basic-small-logo-3fpqb0141-2"
                                        data-variant-id="1125249423"
                                        data-quantity="1"
                                    >
                                        Thay đổi tùy chọn
                                    </a>
                                    <a href="@" className={cx('delete-option')}>
                                        Xóa
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item-cart')}>
                            <div className={cx('box-media-item-cart')}>
                                <div className={cx('box-media')}>
                                    <div className={cx('input-line')}>
                                        <input className={cx('input-item-line')} type="checkbox" />
                                    </div>
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
                                        <div className={cx('price-item')}>
                                            <span>2,590,000₫</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('box-action-item-cart')}>
                                <div className={cx('line-box-action')}>
                                    <a
                                        href="javascript:void(0);"
                                        className={cx('change-option')}
                                        data-url="/products/mlb-ao-polo-nu-co-be-tay-dai-basic-small-logo-3fpqb0141-2"
                                        data-variant-id="1125249423"
                                        data-quantity="1"
                                    >
                                        Thay đổi tùy chọn
                                    </a>
                                    <a href="@" className={cx('delete-option')}>
                                        Xóa
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item-cart')}>
                            <div className={cx('box-media-item-cart')}>
                                <div className={cx('box-media')}>
                                    <div className={cx('input-line')}>
                                        <input className={cx('input-item-line')} type="checkbox" />
                                    </div>
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
                                        <div className={cx('price-item')}>
                                            <span>2,590,000₫</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('box-action-item-cart')}>
                                <div className={cx('line-box-action')}>
                                    <a
                                        href="javascript:void(0);"
                                        className={cx('change-option')}
                                        data-url="/products/mlb-ao-polo-nu-co-be-tay-dai-basic-small-logo-3fpqb0141-2"
                                        data-variant-id="1125249423"
                                        data-quantity="1"
                                    >
                                        Thay đổi tùy chọn
                                    </a>
                                    <a href="@" className={cx('delete-option')}>
                                        Xóa
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item-cart')}>
                            <div className={cx('box-media-item-cart')}>
                                <div className={cx('box-media')}>
                                    <div className={cx('input-line')}>
                                        <input className={cx('input-item-line')} type="checkbox" />
                                    </div>
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
                                        <div className={cx('price-item')}>
                                            <span>2,590,000₫</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('box-action-item-cart')}>
                                <div className={cx('line-box-action')}>
                                    <a
                                        href="javascript:void(0);"
                                        className={cx('change-option')}
                                        data-url="/products/mlb-ao-polo-nu-co-be-tay-dai-basic-small-logo-3fpqb0141-2"
                                        data-variant-id="1125249423"
                                        data-quantity="1"
                                    >
                                        Thay đổi tùy chọn
                                    </a>
                                    <a href="@" className={cx('delete-option')}>
                                        Xóa
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('back-shopping')}>
                        <a href="#">Tiếp tục mua hàng</a>
                    </div>
                </div>
                <div className={cx('sidebar-cart')}>
                    <div className={cx('sidebar-cart-inner')}>
                        <h4>Thông tin đơn hàng</h4>
                        <ul>
                            <li>
                                <label>Tạm tính</label>
                                <span className={cx('subtotal-price')}>17,750,000₫</span>
                            </li>
                            <li>
                                <label>Phí vận chuyển</label>
                                <span>-</span>
                            </li>
                        </ul>
                        <div className={cx('total-price-cart')}>
                            <label>Tổng đơn hàng</label>
                            <span className={cx('total-price')}>17,750,000₫</span>
                        </div>
                    </div>
                    <div className={cx('sidebar-cart-action')}>
                        <button id="process-checkout">Thanh toán</button>
                    </div>
                </div>
            </div>
            {showPopup && (
                <Popup setShowPopup={setShowPopup} maxWidth={850}>
                    <UpdateCart />
                </Popup>
            )}
        </div>
    );
}

export default Cart;
