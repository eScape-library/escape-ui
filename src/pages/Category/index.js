import classNames from 'classnames/bind';
import styles from './Category.module.scss';

import Product from '../../components/Product';
import Pagination from '../../components/Pagination';
import Filter from '../../components/Filter';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    collectionNameSelector,
    collectionSelector,
    filterSelector,
    orderBySelector,
    pageActiveSelector,
    subCategoryIdSelector,
} from '../../redux/selectors';
import categorySlice, { getCollection } from './categorySlice';

const cx = classNames.bind(styles);

function Category() {
    const pageSize = 12;
    const [toggleFilter, setToggleFilter] = useState(false);

    const dispatch = useDispatch();

    const collection = useSelector(collectionSelector);

    const orderBy = useSelector(orderBySelector);
    const page = useSelector(pageActiveSelector);
    const filter = useSelector(filterSelector);
    const subCategoryId = useSelector(subCategoryIdSelector);
    const collectionName = useSelector(collectionNameSelector);

    const setOrderByClause = (value) => {
        dispatch(categorySlice.actions.setOrderBy(value));
    };

    useEffect(() => {
        const orderByClause = orderBy?.split('-');
        const paging = {
            pageSize: pageSize,
            pageNumber: page,
            orderBy:
                orderByClause !== undefined && orderByClause.length === 2
                    ? 'ORDER BY ' + orderByClause[0] + ' ' + orderByClause[1]
                    : null,
            whereClause: filter === null ? null : JSON.stringify(filter),
        };
        dispatch(getCollection({ subCategoryId, paging }));
        window.scrollTo(0, 0);
    }, [subCategoryId, orderBy, filter, page, dispatch]);

    return (
        <div className={cx('wrapper', toggleFilter ? 'show-filter' : '')}>
            <div className={cx('main-title')}>
                <h1>{collectionName}</h1>
            </div>
            <div className={cx('title-collection')}>
                <div className={cx('title-collection-inner')}>
                    <div className={cx('wrapper-title-collection')}>
                        <div className={cx('main-title')}></div>
                        <div className={cx('filter-selected', 'd-none')}>
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
                                        <path
                                            d="M3 3.9165H5.44444V6.36095"
                                            stroke="black"
                                            strokeLinecap="square"
                                        ></path>
                                    </svg>
                                </label>
                                <div className={cx('item-option-filter')}>
                                    <div className={cx('item-js-filter')} data-clear="110">
                                        110
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
                        </div>
                        <div className={cx('option-filter-collection')}>
                            <div className={cx('filter-collection')} onClick={() => setToggleFilter(!toggleFilter)}>
                                <span>Bộ lọc</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="12"
                                    viewBox="0 0 16 12"
                                    fill="none"
                                >
                                    <path d="M1.33325 2.66699H8.83325" stroke="black" strokeLinecap="square"></path>
                                    <path
                                        d="M12.1665 2.66699L14.6665 2.66699"
                                        stroke="black"
                                        strokeLinecap="square"
                                    ></path>
                                    <path
                                        d="M7.1665 9.33301L14.6665 9.33301"
                                        stroke="black"
                                        strokeLinecap="square"
                                    ></path>
                                    <path d="M1.33325 9.33301H3.83325" stroke="black" strokeLinecap="square"></path>
                                    <ellipse
                                        cx="5.49992"
                                        cy="9.33366"
                                        rx="1.66667"
                                        ry="1.66667"
                                        stroke="black"
                                    ></ellipse>
                                    <ellipse
                                        cx="10.4999"
                                        cy="2.66667"
                                        rx="1.66667"
                                        ry="1.66667"
                                        stroke="black"
                                    ></ellipse>
                                </svg>
                            </div>
                            <div className={cx('sort-collection')}>
                                <select
                                    className="sort-by select2-hidden-accessible"
                                    tabIndex="-1"
                                    aria-hidden="true"
                                    onChange={(e) => setOrderByClause(e.target.value)}
                                >
                                    <option value="">Sắp xếp</option>
                                    <option value="Price-asc">Giá: Tăng dần</option>
                                    <option value="Price-desc">Giá: Giảm dần</option>
                                    <option value="ProductName-asc">Tên: A-Z</option>
                                    <option value="ProductName-desc">Tên: Z-A</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('content-collection')}>
                {collection?.items && collection?.items.length > 0 ? (
                    <div className="grid">
                        <div className="row">
                            {collection.items.map((item, index) => (
                                <Product className="col l-3" data={item} key={index} />
                            ))}
                        </div>

                        <Pagination
                            totalRecord={collection.total}
                            pageSize={pageSize}
                            //callback={(data) => setPage(data)}
                        />
                    </div>
                ) : (
                    <div className={cx('empty-product')}>
                        <img
                            src="https://file.hstatic.net/200000642007/file/nodata_713db710dfaa4e8c903efadc0e3db0af.png"
                            alt="Vớ"
                        />
                        <span>Hiện nhóm sản phẩm chưa cập nhật sản phẩm</span>
                    </div>
                )}
            </div>
            <Filter
                isShowFilter={toggleFilter}
                setShowFilter={(toggleFilter) => setToggleFilter(toggleFilter)}
                totalRecord={collection.total}
            />
            <div className={cx('overflay-filter')}></div>
        </div>
    );
}

export default Category;
