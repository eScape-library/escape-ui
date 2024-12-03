import classNames from 'classnames/bind';
import styles from './MiniSearch.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchSlice from '../../pages/Search/searchSlice';
import { useNavigate } from 'react-router-dom';
import * as searchService from '../../apiServices/searchProductsService';
import { historySearchSelector } from '../../redux/selectors';

const cx = classNames.bind(styles);

function MiniSearch({ showSearch = false, callback }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');
    const [results, setResult] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const historySearch = useSelector(historySearchSelector);

    const handleSearch = () => {
        callback(false);
        navigate('/search');
        dispatch(searchSlice.actions.setProductName(searchTerm));
        dispatch(searchSlice.actions.addToHistory(debouncedTerm));
    };

    const handleHistorySearch = (item) => {
        callback(false);
        dispatch(searchSlice.actions.setProductName(searchTerm));
        dispatch(searchSlice.actions.setProductName(item));
        navigate('/search');
    };

    const handleRemoveHistory = () => {
        dispatch(searchSlice.actions.removeAllHistory());
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        if (debouncedTerm.trim()) {
            searchService
                .searchProducts({
                    pageSize: 6,
                    pageNumber: 1,
                    whereClause: JSON.stringify({ productName: debouncedTerm }),
                })
                .then((data) => setResult(data))
                .catch((error) => console.error(error));
        } else setResult({});
    }, [debouncedTerm, dispatch]);
    return (
        <div className={cx('wrapper', showSearch ? 'active' : 'd-none')}>
            <div className={cx('mini-search-inner')}>
                <div className={cx('form-mini-search')}>
                    <div className={cx('form-search')} onSubmit={(e) => e.preventDefault()}>
                        <input type="hidden" name="type" value="product" />
                        <input
                            type="text"
                            className={cx('input-search')}
                            placeholder="#Giày MLB Chunky Liner"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="button" onClick={handleSearch}>
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
                        <span
                            className={cx('clear-text-search', searchTerm === '' ? 'd-none' : '')}
                            onClick={() => setSearchTerm('')}
                        >
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
                    </div>
                    <div className={cx('result-search', searchTerm === '' ? 'd-none' : '')}>
                        <div className={cx('list-result-search')}>
                            {results.items?.map((product, index) => (
                                <div key={index} className={cx('item-product-search')}>
                                    <div className={cx('media-product-search')}>
                                        <a href={`/details/${product?.productDetailsId}`}>
                                            <img src={product?.productImage} alt={product?.productName} />
                                        </a>
                                    </div>
                                    <div className={cx('title-product-search')}>
                                        <a href={`/details/${product?.productDetailsId}`}>{product?.productName}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-component-mini-search')}>
                    <div className={cx('history-search')}>
                        <div className={cx('title-history')}>
                            <h4>Lịch sử tìm kiếm</h4>
                            <span className={cx('clear-key-search')} onClick={handleRemoveHistory}>
                                Xóa hết
                            </span>
                        </div>
                        <ul>
                            {historySearch.map((item, index) => (
                                <li key={index} onClick={() => handleHistorySearch(item)}>
                                    <a href="#">{item}</a>
                                </li>
                            ))}
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
