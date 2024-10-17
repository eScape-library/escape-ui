import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';

const cx = classNames.bind(styles);

function ProductDetails() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('product-inner')}>
                    <div className={cx('image')}>
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="https://product.hstatic.net/200000642007/product/50ivs_3atsv2143_1_bc24aeae61864aac8fd717a2e5837448_34181f53e68d4b439b1bc95d333cbd79_master.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://product.hstatic.net/200000642007/product/50ivs_3atsv2143_2_c2e6791e82104364a58844934033e4ed_8bc50bc8e4404c819ea48eab8e7615ef_master.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span
                                    className={cx('button-control', 'carousel-control-prev-icon')}
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span
                                    className={cx('button-control', 'carousel-control-next-icon')}
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className={cx('product-detail')}>
                        <div className={cx('info-product-detail')}>
                            <div className={cx('heading-product-detail')}>
                                <div className={cx('title-product-detail')}>
                                    <h1>MLB - Áo thun unisex cổ tròn tay ngắn Sportive Varsity Track</h1>
                                </div>
                                <div className={cx('wishlist-product-detail')}>
                                    <a href="#" className={cx('sharing-product')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                        >
                                            {' '}
                                            <path
                                                d="M21.6969 8.01054C22.1594 8.80179 23.018 9.33333 24.0006 9.33333C25.4734 9.33333 26.6673 8.13943 26.6673 6.66667C26.6673 5.19391 25.4734 4 24.0006 4C22.5279 4 21.334 5.19391 21.334 6.66667C21.334 7.15674 21.4662 7.61594 21.6969 8.01054ZM21.6969 8.01054L10.3044 14.6561M10.3044 14.6561C9.84187 13.8649 8.98334 13.3333 8.00065 13.3333C6.52789 13.3333 5.33398 14.5272 5.33398 16C5.33398 17.4728 6.52789 18.6667 8.00065 18.6667C8.98334 18.6667 9.84187 18.1351 10.3044 17.3439M10.3044 14.6561C10.5351 15.0507 10.6673 15.5099 10.6673 16C10.6673 16.4901 10.5351 16.9493 10.3044 17.3439M10.3044 17.3439L21.6969 23.9895M21.6969 23.9895C22.1594 23.1982 23.018 22.6667 24.0006 22.6667C25.4734 22.6667 26.6673 23.8606 26.6673 25.3333C26.6673 26.8061 25.4734 28 24.0006 28C22.5279 28 21.334 26.8061 21.334 25.3333C21.334 24.8433 21.4662 24.3841 21.6969 23.9895Z"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{' '}
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className={cx('wishlist-product', 'js-wishlist')}
                                        data-title="MLB - Áo thun unisex cổ tròn tay ngắn Sportive Varsity Track"
                                        data-handle="mlb-ao-thun-unisex-co-tron-tay-ngan-sportive-varsity-track-3atsv2143-2"
                                        data-price="1690000"
                                        data-id="1055531528"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                        >
                                            {' '}
                                            <g clipPath="url(#wishlist-svg)">
                                                {' '}
                                                <path
                                                    d="M15.7232 25.5459L7.37014 17.1929C5.20995 15.0327 5.20995 11.5303 7.37014 9.37014C9.53033 7.20995 13.0327 7.20995 15.1929 9.37014L15.7232 9.90047L16.2535 9.37014C18.4137 7.20995 21.9161 7.20995 24.0763 9.37014C26.2365 11.5303 26.2365 15.0327 24.0763 17.1929L15.7232 25.5459Z"
                                                    stroke="black"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>{' '}
                                            </g>{' '}
                                            <defs>
                                                {' '}
                                                <clipPath id="wishlist-svg">
                                                    {' '}
                                                    <rect width="32" height="32" fill="white"></rect>{' '}
                                                </clipPath>{' '}
                                            </defs>{' '}
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className={cx('price-product-detail')}>
                                <span>1,690,000₫</span>
                            </div>
                            <div className={cx('swatch-color')} data-index="option1">
                                <div
                                    className={cx('item-swatch')}
                                    data-url="/products/mlb-ao-thun-unisex-co-tron-tay-ngan-sportive-varsity-track-3atsv2143-1"
                                    data-pid="1055531526"
                                >
                                    <img
                                        src="https://product.hstatic.net/200000642007/product/icon_43bks_3atsv2143_f05621cba4bd4f908c17ca5f0b0dc5a2_80a084a3b2fe45eabd62cee76666e342.jpg"
                                        alt="43bks"
                                    />
                                </div>
                                <div
                                    className={cx('item-swatch', 'active')}
                                    data-url="/products/mlb-ao-thun-unisex-co-tron-tay-ngan-sportive-varsity-track-3atsv2143-2"
                                    data-pid="1055531528"
                                >
                                    <img
                                        src="https://product.hstatic.net/200000642007/product/icon_50ivs_3atsv2143_83535f06639c421aaa54eadfd96ccbd3_23b45f737e9442689ba5b4d41d58539c.jpg"
                                        alt="50ivs"
                                    />
                                </div>
                            </div>

                            <div className={cx('selector-product-detail')}>
                                <div className={cx('selector-product-detail-inner')}>
                                    <div className={cx('option-swatch')}>
                                        <div className={cx('title-swatch')}>
                                            <h4>Chọn kích thước</h4>
                                            <span className={cx('open-size-chart')} data-size="aothununisex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="9"
                                                    viewBox="0 0 20 9"
                                                    fill="none"
                                                >
                                                    {' '}
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width="19"
                                                        height="8"
                                                        rx="0.5"
                                                        stroke="black"
                                                    ></rect>{' '}
                                                    <rect x="3.5" y="4" width="1" height="4" fill="black"></rect>{' '}
                                                    <rect x="6.5" y="6" width="1" height="2" fill="black"></rect>{' '}
                                                    <rect x="12.5" y="6" width="1" height="2" fill="black"></rect>{' '}
                                                    <rect x="9.5" y="4" width="1" height="4" fill="black"></rect>{' '}
                                                    <rect x="15.5" y="4" width="1" height="4" fill="black"></rect>{' '}
                                                </svg>
                                                Hướng dẫn kích thước
                                            </span>
                                        </div>
                                        <div className={cx('swatch-size')} data-index="option2">
                                            <div className={cx('item-swatch')} data-option2="XS">
                                                XS
                                            </div>
                                            <div className={cx('item-swatch')} data-option2="S">
                                                S
                                            </div>
                                            <div className={cx('item-swatch')} data-option2="M">
                                                M
                                            </div>
                                            <div className={cx('item-swatch', 'active')} data-option2="L">
                                                L
                                            </div>
                                            <div className={cx('item-swatch', 'soldout')} data-option2="XL">
                                                XL
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('action-detail')}>
                                        <button id="btn-addtocart">Thêm vào giỏ</button>
                                        <button className={cx('btn-buynow')} id="btn-buynow">
                                            Mua ngay
                                        </button>
                                    </div>
                                    <div className={cx('details__promotion2')}>
                                        <div className={cx('box-gift-detail')}>
                                            <b>eScape Chào bạn mới</b>
                                            Nhận ngay ưu đãi 5% khi đăng ký thành viên và mua đơn hàng nguyên giá đầu
                                            tiên tại website*
                                            <br />
                                            Nhập mã: ESCAPEWELCOME
                                            <br />
                                            Ưu đãi không áp dụng cùng với các CTKM khác
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
