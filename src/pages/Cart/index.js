import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Popup from '../../components/Popup';
import UpdateCart from '../../components/UpdateCart';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartItemsSelector, selectedItemSelector, totalPriceSelector } from '../../redux/selectors';
import cartSlice, { removeCartItem } from './cartSlice';
const cx = classNames.bind(styles);

function Cart() {
    const [showPopup, setShowPopup] = useState(false);
    // const [productDetailsId, setProductDetailsId] = useState(0);
    // const [cartId, setCartId] = useState(0);
    const [cartItem, setCartItem] = useState({});
    const cartItems = useSelector(cartItemsSelector);
    const totalPrice = useSelector(totalPriceSelector);
    const dispatch = useDispatch();
    const selectedItems = useSelector(selectedItemSelector);
    const navigate = useNavigate();

    const handleDeleteCartItem = (cartId) => {
        dispatch(removeCartItem({ cartId }));
    };

    const handleSelectedItem = (event) => {
        const cart = event.target.value;
        const checked = event.target.checked;
        checked
            ? dispatch(cartSlice.actions.addToSelectedItem(cart))
            : dispatch(cartSlice.actions.removeSelectedItem(cart));
    };

    const resetFilters = (event) => {
        const checked = event.target.checked;
        checked
            ? dispatch(cartSlice.actions.addAllToSelectedItem())
            : dispatch(cartSlice.actions.removeAllSelectedItem());
    };

    const handleChangeOption = (cart) => {
        setShowPopup(!showPopup);
        setCartItem(cart);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-wrapper-cart')}>
                <div className={cx('main-cart')}>
                    <div className={cx('heading-cart')}>
                        <input type="checkbox" className={cx('select-all')} onChange={resetFilters} />
                        <span>Chọn tất cả</span>
                    </div>
                    <div className={cx('body-cart')}>
                        {cartItems?.map((item, index) => (
                            <div key={index} className={cx('item-cart')}>
                                <div className={cx('box-media-item-cart')}>
                                    <div className={cx('box-media')}>
                                        <div className={cx('input-line')}>
                                            <input
                                                className={cx('input-item-line')}
                                                type="checkbox"
                                                value={JSON.stringify(item)}
                                                checked={selectedItems?.some(
                                                    (selectedItem) => selectedItem?.cartId === item?.cartId,
                                                )}
                                                onChange={handleSelectedItem}
                                            />
                                        </div>
                                        <div className={cx('img-media')}>
                                            <a href="#">
                                                <img src={item?.productImage} alt={item?.productName} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('box-info')}>
                                        <div className={cx('box-info-inner')}>
                                            <div className={cx('title-item')}>
                                                <a onClick={() => navigate(`/details/${item?.productDetailsId}`)}>
                                                    {item?.productName}
                                                </a>
                                            </div>
                                            <div className={cx('variant-item')}>
                                                {item?.color} / {item?.size}
                                            </div>
                                            <div className={cx('quantity-item')}>Số lượng: {item?.quantity}</div>
                                            <div className={cx('price-item')}>
                                                <span>{item?.price}₫</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('box-action-item-cart')}>
                                    <div className={cx('line-box-action')}>
                                        <a
                                            href="javascript:void(0);"
                                            className={cx('change-option')}
                                            onClick={() => handleChangeOption(item)}
                                        >
                                            Thay đổi tùy chọn
                                        </a>
                                        <a
                                            className={cx('delete-option')}
                                            onClick={() => handleDeleteCartItem(item?.cartId)}
                                        >
                                            Xóa
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {cartItems.length === 0 && (
                            <div className={cx('empty-cart')}>
                                <div className={cx('icon-empty-cart')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                    >
                                        {' '}
                                        <path
                                            d="M21.27 31.67C21.76 31.67 22.19 31.48 22.57 31.1C22.95 30.72 23.14 30.29 23.14 29.8C23.14 29.31 22.95 28.88 22.57 28.5C22.19 28.12 21.76 27.93 21.27 27.93C20.74 27.93 20.29 28.12 19.94 28.5C19.58 28.88 19.41 29.31 19.41 29.8C19.41 30.29 19.59 30.72 19.94 31.1C20.3 31.48 20.74 31.67 21.27 31.67ZM32.27 31.67C32.76 31.67 33.19 31.48 33.57 31.1C33.95 30.72 34.14 30.29 34.14 29.8C34.14 29.31 33.95 28.88 33.57 28.5C33.19 28.12 32.76 27.93 32.27 27.93C31.78 27.93 31.35 28.12 30.97 28.5C30.59 28.88 30.4 29.31 30.4 29.8C30.4 30.29 30.59 30.72 30.97 31.1C31.35 31.48 31.78 31.67 32.27 31.67ZM43.14 31.67C43.63 31.67 44.06 31.48 44.44 31.1C44.82 30.72 45.01 30.29 45.01 29.8C45.01 29.31 44.82 28.88 44.44 28.5C44.06 28.12 43.63 27.93 43.14 27.93C42.65 27.93 42.22 28.12 41.84 28.5C41.46 28.88 41.27 29.31 41.27 29.8C41.27 30.29 41.46 30.72 41.84 31.1C42.22 31.48 42.65 31.67 43.14 31.67ZM9 55.2V15.6C9 14.58 9.34 13.72 10.03 13.03C10.72 12.34 11.58 12 12.6 12H51.8C52.82 12 53.68 12.34 54.37 13.03C55.06 13.72 55.4 14.57 55.4 15.6V44.13C55.4 45.15 55.06 46.01 54.37 46.7C53.68 47.39 52.83 47.73 51.8 47.73H16.47L9 55.2ZM10.47 51.6L15.8 46.27H51.8C52.42 46.27 52.93 46.07 53.33 45.67C53.73 45.27 53.93 44.76 53.93 44.14V15.6C53.93 14.98 53.73 14.47 53.33 14.07C52.93 13.67 52.42 13.47 51.8 13.47H12.6C11.98 13.47 11.47 13.67 11.07 14.07C10.67 14.47 10.47 14.98 10.47 15.6V51.6Z"
                                            fill="#D0D0D0"
                                        ></path>{' '}
                                        <path
                                            opacity="0.05"
                                            d="M51.8 42.2696H15.8L10.47 47.5996V51.5996L15.8 46.2696H51.8C52.42 46.2696 52.93 46.0696 53.33 45.6696C53.73 45.2696 53.93 44.7596 53.93 44.1396V40.1396C53.93 40.7596 53.73 41.2696 53.33 41.6696C52.93 42.0696 52.42 42.2696 51.8 42.2696Z"
                                            fill="black"
                                        ></path>{' '}
                                    </svg>
                                </div>
                                <span className={cx('text-empty-cart')}>Không có sản phẩm nào trong giỏ hàng</span>
                            </div>
                        )}
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
                                <span className={cx('subtotal-price')}>{totalPrice.toLocaleString('en-US')}₫</span>
                            </li>
                            <li>
                                <label>Phí vận chuyển</label>
                                <span>-</span>
                            </li>
                        </ul>
                        <div className={cx('total-price-cart')}>
                            <label>Tổng đơn hàng</label>
                            <span className={cx('total-price')}>{totalPrice.toLocaleString('en-US')}₫</span>
                        </div>
                    </div>
                    <div className={cx('sidebar-cart-action')}>
                        <button id="process-checkout">Thanh toán</button>
                    </div>
                </div>
            </div>
            {showPopup && (
                <Popup setShowPopup={setShowPopup} maxWidth={850}>
                    <UpdateCart cart={cartItem} callback={setShowPopup} />
                </Popup>
            )}
        </div>
    );
}

export default Cart;
