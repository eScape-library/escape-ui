import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Filter({ isShowFilter, setShowFilter, callback, totalRecord }) {
    const [isColorActive, setColorActive] = useState(false);
    const [isSizeActive, setSizeActive] = useState(false);
    const [isPriceActive, setPriceActive] = useState(false);
    const [filters, setFilters] = useState({ color: [], size: [], price: '' });

    const handleCheckboxChange = (event) => {
        const { value, checked, type } = event.target; // include `type`
        const [filterType, val] = value.split(':');

        setFilters((prevFilters) => {
            let updatedList;

            if (type === 'checkbox') {
                updatedList = checked
                    ? [...prevFilters[filterType], val] // add if checked
                    : prevFilters[filterType].filter((item) => item !== val); // remove if unchecked
            } else if (type === 'radio') {
                updatedList = checked ? val : '';
            }

            return { ...prevFilters, [filterType]: updatedList };
        });
    };
    useEffect(() => {
        console.log(filters);
        callback(filters);
    }, [filters]);
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
                                    setFilters({ ...filters });
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
                            <div className={cx('content-item-filter', 'mausac', isColorActive ? 'active' : '')}>
                                <ul>
                                    {[
                                        'Black',
                                        'White',
                                        'Red',
                                        'Gray',
                                        'Blue',
                                        'Pink',
                                        'Yellow',
                                        'Violet',
                                        'Brown',
                                        'Green',
                                        'Nude',
                                        'Orange',
                                    ].map((color) => (
                                        <li key={color}>
                                            <input
                                                id={`color-${color}`}
                                                type="checkbox"
                                                value={`color:${color}`}
                                                className={cx('input-filter')}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label htmlFor={`color-${color}`}>
                                                <span className={cx(`${color}`)}>{color}</span>
                                            </label>
                                        </li>
                                    ))}
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
                            <div className={cx('content-item-filter', 'filter-size', isSizeActive ? 'active' : '')}>
                                <div className={cx('item-filter-size')} data-size="1">
                                    <label>Quần áo</label>
                                    <ul>
                                        {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                            <li key={size} className={cx('item-size-text')}>
                                                <input
                                                    type="checkbox"
                                                    value={`size:${size}`}
                                                    className={cx('input-filter')}
                                                    onChange={handleCheckboxChange}
                                                    id={`${size}`}
                                                />
                                                <label htmlFor={`${size}`}>
                                                    <span>{size}</span>
                                                </label>
                                            </li>
                                        ))}
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
                                            value="price:lt-1000000"
                                            onChange={handleCheckboxChange}
                                            id="price-filter-1"
                                        />
                                        <label htmlFor="price-filter-1">Dưới 1,000,000đ</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            className={cx('input-filter')}
                                            name="filter-price"
                                            value="price:bt-1000000_2000000"
                                            onChange={handleCheckboxChange}
                                            id="price-filter-2"
                                        />
                                        <label htmlFor="price-filter-2">1,000,000đ - 2,000,000đ</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            className={cx('input-filter')}
                                            name="filter-price"
                                            value="price:bt-2000000_3000000"
                                            onChange={handleCheckboxChange}
                                            id="price-filter-3"
                                        />
                                        <label htmlFor="price-filter-3">2,000,000đ - 3,000,000đ</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            className={cx('input-filter')}
                                            name="filter-price"
                                            value="price:gt-4000000)"
                                            onChange={handleCheckboxChange}
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
                    <div className={cx('total-filter')} onClick={() => setShowFilter(!isShowFilter)}>
                        <div className={cx('view-filter')}>
                            Xem <span>{totalRecord}</span> sản phẩm
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
