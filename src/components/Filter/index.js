import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Filter({ isShowFilter, setShowFilter }) {
    const [isColorActive, setColorActive] = useState(false);
    const [isSizeActive, setSizeActive] = useState(false);
    const [isPriceActive, setPriceActive] = useState(false);

    return (
        <div className={cx(isShowFilter ? 'show-filter' : '')}>
            <div className={cx('wrapper')}>
                <div className={cx('sidebar-filter-inner')}>
                    <div className={cx('heading-filter')}>
                        <h4>Bộ lọc</h4>
                        <div className={cx('close-filter')} onClick={() => setShowFilter(!isShowFilter)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M18 6L6 18"
                                    stroke="black"
                                    strokeWidth="1.2"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M6 6L18 18"
                                    stroke="black"
                                    strokeWidth="1.2"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className={cx('content-filter')}>
                        <div className={cx('item-filter-sidebar')}>
                            <div
                                className={cx('title-item-filter', isColorActive ? 'active' : '')}
                                data-content="Filter2"
                                onClick={() => {
                                    setColorActive(!isColorActive);
                                }}
                            >
                                <h4>Màu sắc</h4>
                                <div className={cx('arrows-filter')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                    >
                                        <path
                                            d="M1 5L4.75 1.25L8.5 5"
                                            stroke="black"
                                            strokeWidth="1.2"
                                            strokeLinecap="square"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div
                                data-content="Filter2"
                                className={cx('content-item-filter', 'mausac', isColorActive ? 'active' : '')}
                            >
                                <ul>
                                    <li>
                                        <input id="filter2-den" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-den">
                                            <span className={cx('den')}>Đen</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-trang" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-trang">
                                            <span className={cx('trang')}>Trắng</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-do" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-do">
                                            <span className={cx('do')}>Đỏ</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-xam" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-xam">
                                            <span className={cx('xam')}>Xám</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-xanh-duong" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-xanh-duong">
                                            <span className={cx('xanh-duong')}>Xanh dương</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-hong" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-hong">
                                            <span className={cx('hong')}>Hồng</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-vang" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-vang">
                                            <span className={cx('vang')}>Vàng</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-tim" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-tim">
                                            <span className={cx('tim')}>Tím</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-nau" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-nau">
                                            <span className={cx('nau')}>Nâu</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-xanh-la" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-xanh-la">
                                            <span className={cx('xanh-la')}>Xanh lá</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-nude" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-nude">
                                            <span className={cx('nude')}>Nude</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input id="filter2-cam" type="checkbox" className={cx('input-filter')} />
                                        <label htmlFor="filter2-cam">
                                            <span className={cx('cam')}>Cam</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('item-filter-sidebar')}>
                            <div
                                className={cx('title-item-filter', isSizeActive ? 'active' : '')}
                                data-content="Filter4"
                                onClick={() => {
                                    setSizeActive(!isSizeActive);
                                }}
                            >
                                <h4>Kích thước</h4>
                                <div className={cx('arrows-filter')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                    >
                                        <path
                                            d="M1 5L4.75 1.25L8.5 5"
                                            stroke="black"
                                            strokeWidth="1.2"
                                            strokeLinecap="square"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div
                                data-content="Filter4"
                                className={cx('content-item-filter', 'filter-size', isSizeActive ? 'active' : '')}
                            >
                                <div className={cx('item-filter-size')} data-size="1">
                                    <label>Quần áo</label>
                                    <ul>
                                        <li className={cx('item-size-text')}>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="XS"
                                                id="filter4-XS"
                                            />
                                            <label htmlFor="filter4-XS">
                                                <span>XS</span>
                                            </label>
                                        </li>
                                        <li className={cx('item-size-text')}>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="S"
                                                id="filter4-S"
                                            />
                                            <label htmlFor="filter4-S">
                                                <span>S</span>
                                            </label>
                                        </li>
                                        <li className={cx('item-size-text')}>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="M"
                                                id="filter4-M"
                                            />
                                            <label htmlFor="filter4-M">
                                                <span>M</span>
                                            </label>
                                        </li>
                                        <li className={cx('item-size-text')}>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="L"
                                                id="filter4-L"
                                            />
                                            <label htmlFor="filter4-L">
                                                <span>L</span>
                                            </label>
                                        </li>
                                        <li className={cx('item-size-text')}>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="XL"
                                                id="filter4-XL"
                                            />
                                            <label htmlFor="filter4-XL">
                                                <span>XL</span>
                                            </label>
                                        </li>
                                        <li className={cx('item-size-text')}>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="XXL"
                                                id="filter4-XXL"
                                            />
                                            <label htmlFor="filter4-XXL">
                                                <span>XXL</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('item-filter-size')} data-size="2">
                                    <label>Giày dép</label>
                                    <ul>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="230"
                                                id="filter4-230"
                                            />
                                            <label htmlFor="filter4-230">
                                                <span>230</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="235"
                                                id="filter4-235"
                                            />
                                            <label htmlFor="filter4-235">
                                                <span>235</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="240"
                                                id="filter4-240"
                                            />
                                            <label htmlFor="filter4-240">
                                                <span>240</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="245"
                                                id="filter4-245"
                                            />
                                            <label htmlFor="filter4-245">
                                                <span>245</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="250"
                                                id="filter4-250"
                                            />
                                            <label htmlFor="filter4-250">
                                                <span>250</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="255"
                                                id="filter4-255"
                                            />
                                            <label htmlFor="filter4-255">
                                                <span>255</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="260"
                                                id="filter4-260"
                                            />
                                            <label htmlFor="filter4-260">
                                                <span>260</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="265"
                                                id="filter4-265"
                                            />
                                            <label htmlFor="filter4-265">
                                                <span>265</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="270"
                                                id="filter4-270"
                                            />
                                            <label htmlFor="filter4-270">
                                                <span>270</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="275"
                                                id="filter4-275"
                                            />
                                            <label htmlFor="filter4-275">
                                                <span>275</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="280"
                                                id="filter4-280"
                                            />
                                            <label htmlFor="filter4-280">
                                                <span>280</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="285"
                                                id="filter4-285"
                                            />
                                            <label htmlFor="filter4-285">
                                                <span>285</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="290"
                                                id="filter4-290"
                                            />
                                            <label htmlFor="filter4-290">
                                                <span>290</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="295"
                                                id="filter4-295"
                                            />
                                            <label htmlFor="filter4-295">
                                                <span>295</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                className={cx('input-filter')}
                                                name="filter4"
                                                value="300"
                                                id="filter4-300"
                                            />
                                            <label htmlFor="filter4-300">
                                                <span>300</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={cx('item-filter-sidebar')}>
                            <div
                                className={cx('title-item-filter', isPriceActive ? 'active' : '')}
                                data-content="Filter5"
                                onClick={() => {
                                    setPriceActive(!isPriceActive);
                                }}
                            >
                                <h4>Giá</h4>
                                <div className={cx('arrows-filter')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                    >
                                        <path
                                            d="M1 5L4.75 1.25L8.5 5"
                                            stroke="black"
                                            strokeWidth="1.2"
                                            strokeLinecap="square"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div
                                data-content="Filter5"
                                className={cx('content-item-filter', 'filter-price', isPriceActive ? 'active' : '')}
                            >
                                <ul>
                                    <li>
                                        <input
                                            type="radio"
                                            className={cx('input-filter')}
                                            name="filter-price"
                                            value="(price_variant:product < 1000000)"
                                            data-price="1000000"
                                            id="price-filter-1"
                                        />
                                        <label htmlFor="price-filter-1">Dưới 1,000,000đ</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            className={cx('input-filter')}
                                            name="filter-price"
                                            value="(price_variant:product range 1000000_2000000)"
                                            data-price="1000000_2000000"
                                            id="price-filter-2"
                                        />
                                        <label htmlFor="price-filter-2">1,000,000đ - 2,000,000đ</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            className={cx('input-filter')}
                                            name="filter-price"
                                            value="(price_variant:product range 2000000_3000000)"
                                            data-price="2000000_3000000"
                                            id="price-filter-3"
                                        />
                                        <label htmlFor="price-filter-3">2,000,000đ - 3,000,000đ</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            className={cx('input-filter')}
                                            name="filter-price"
                                            value="(price_variant:product > 4000000)"
                                            data-price="4000000"
                                            id="price-filter-4"
                                        />
                                        <label htmlFor="price-filter-4">Trên 4,000,000đ</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('result-filter')}>
                    <div className={cx('option-filter')}>
                        <label>
                            Xóa lọc
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M8.5 3C11.5376 3 14 5.46243 14 8.5C14 11.5376 11.5376 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 6.77223 3.79669 5.23053 5.04274 4.22222"
                                    stroke="black"
                                    strokeLinecap="square"
                                ></path>
                                <path d="M3 3.9165H5.44444V6.36095" stroke="black" strokeLinecap="square"></path>
                            </svg>
                        </label>
                        <div className={cx('item-option-filter')}>
                            <div className={cx('item-js-filter')} data-clear="Áo thun">
                                Áo thun
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                >
                                    <path
                                        d="M7.19995 0.800049L0.80005 7.20005"
                                        stroke="#F8F8F8"
                                        strokeLinecap="square"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M0.800049 0.800049L7.19995 7.20005"
                                        stroke="#F8F8F8"
                                        strokeLinecap="square"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={cx('total-filter')}>
                        <div className={cx('view-filter')}>
                            Xem <span>145</span> sản phẩm
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
