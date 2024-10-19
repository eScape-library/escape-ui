import classNames from 'classnames/bind';
import styles from './MiniSearch.module.scss';

const cx = classNames.bind(styles);

function MiniSearch({ showSearch = false, callback }) {
    return (
        <div className={cx('wrapper', showSearch ? 'active' : 'd-none')}>
            <div className={cx('mini-search-inner')}>
                <div className={cx('form-mini-search')}>
                    <form className={cx('form-search')} action="/search">
                        <input type="hidden" name="type" value="product" />
                        <input
                            type="text"
                            name="q"
                            className={cx('input-search')}
                            placeholder="#Giày MLB Chunky Liner"
                        />
                        <button type="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                            >
                                {' '}
                                <path
                                    d="M21 21L16.1743 16.1743M16.1743 16.1743C17.7829 14.5657 18.7778 12.3435 18.7778 9.88889C18.7778 4.97969 14.7981 1 9.88889 1C4.97969 1 1 4.97969 1 9.88889C1 14.7981 4.97969 18.7778 9.88889 18.7778C12.3435 18.7778 14.5657 17.7829 16.1743 16.1743Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="square"
                                ></path>{' '}
                            </svg>
                        </button>
                        <span className={cx('clear-text-search', 'd-none')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                {' '}
                                <circle cx="12" cy="12" r="12" fill="#E8E8E8"></circle>{' '}
                                <path
                                    d="M15.1992 8.80005L8.79932 15.2"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{' '}
                                <path
                                    d="M8.7998 8.80005L15.1997 15.2"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{' '}
                            </svg>
                        </span>
                    </form>
                    <div className={cx('result-search')}>
                        <div className={cx('list-result-search')}>
                            <div className={cx('item-product-search')}>
                                <div className={cx('media-product-search')}>
                                    <a href="/products/mlb-ao-khoac-denim-basic-la-31jpn3011-4">
                                        <img
                                            src="//product.hstatic.net/200000642007/product/07u_31jpn3011_1_ec1c78c5bb4b4ae6a3b19d69a7f98780_5df78814070b4e388d65894535561d8b_grande.jpg"
                                            alt="MLB - Áo khoác denim basic LA"
                                        />
                                    </a>
                                </div>
                                <div className={cx('title-product-search')}>
                                    <a href="/products/mlb-ao-khoac-denim-basic-la-31jpn3011-4">
                                        MLB - Áo khoác denim basic LA
                                    </a>
                                </div>
                            </div>
                            <div className={cx('item-product-search')}>
                                <div className={cx('media-product-search')}>
                                    <a href="/products/mlb-ao-khoac-denim-basic-la-31jpn3011-3">
                                        <img
                                            src="//product.hstatic.net/200000642007/product/50u_31jpn3011_1_4b168b86ac284a2eb7c6ddd7e69b4cef_619d50a250c74cfe8ea6302454b2c73e_grande.jpg"
                                            alt="MLB - Áo khoác denim basic LA"
                                        />
                                    </a>
                                </div>
                                <div className={cx('title-product-search')}>
                                    <a href="/products/mlb-ao-khoac-denim-basic-la-31jpn3011-3">
                                        MLB - Áo khoác denim basic LA
                                    </a>
                                </div>
                            </div>
                            <div className={cx('item-product-search')}>
                                <div className={cx('media-product-search')}>
                                    <a href="/products/mlb-ao-khoac-bong-chay-monogram-5">
                                        <img
                                            src="//product.hstatic.net/200000642007/product/50l_31jpm1011_1_6dff173d82c049f1b92c2985c4d4c6f6_3fa3a28fd8fe48ea8493312ae6df7d4d_grande.jpg"
                                            alt="MLB - Áo khoác bóng chày Monogram"
                                        />
                                    </a>
                                </div>
                                <div className={cx('title-product-search')}>
                                    <a href="/products/mlb-ao-khoac-bong-chay-monogram-5">
                                        MLB - Áo khoác bóng chày Monogram
                                    </a>
                                </div>
                            </div>
                            <div className={cx('item-product-search')}>
                                <div className={cx('media-product-search')}>
                                    <a href="/products/mlb-ao-khoac-bong-chay-monogram-4">
                                        <img
                                            src="//product.hstatic.net/200000642007/product/50n_31jpm1011_1_52fe449613a94db1bd06f4c5514925ea_4de09636609440d09699f3fddd5e8a6f_grande.jpg"
                                            alt="MLB - Áo khoác bóng chày Monogram"
                                        />
                                    </a>
                                </div>
                                <div className={cx('title-product-search')}>
                                    <a href="/products/mlb-ao-khoac-bong-chay-monogram-4">
                                        MLB - Áo khoác bóng chày Monogram
                                    </a>
                                </div>
                            </div>
                            <div className={cx('item-product-search')}>
                                <div className={cx('media-product-search')}>
                                    <a href="/products/mlb-ao-khoac-bong-chay-monogram-3">
                                        <img
                                            src="//product.hstatic.net/200000642007/product/07i_31jpm1011_1_484d3e0847d54734a7b7cffa994fdd67_12ccde54211142da8266250e6822fee1_grande.jpg"
                                            alt="MLB - Áo khoác bóng chày Monogram"
                                        />
                                    </a>
                                </div>
                                <div className={cx('title-product-search')}>
                                    <a href="/products/mlb-ao-khoac-bong-chay-monogram-3">
                                        MLB - Áo khoác bóng chày Monogram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-component-mini-search')}>
                    <div className={cx('history-search')}>
                        <div className={cx('title-history')}>
                            <h4>Lịch sử tìm kiếm</h4>
                            <span className={cx('clear-key-search')}>Xóa hết</span>
                        </div>
                        <ul>
                            <li>
                                <a href="#">ao</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('close-mini-search')} onClick={() => callback(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    {' '}
                    <path
                        d="M14.6006 1.40002L1.81646 14.6007"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>{' '}
                    <path
                        d="M1.40039 1.53528L14.4637 14.4654"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>{' '}
                </svg>
            </div>
        </div>
    );
}

export default MiniSearch;
