import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { pageActiveSelector } from '../../redux/selectors';
import paginationSlice from './paginationSlice';

const cx = classNames.bind(styles);

function Pagination({ totalRecord, pageSize }) {
    const lastPage = Math.ceil(totalRecord / pageSize);
    const page = useSelector(pageActiveSelector);
    const dispatch = useDispatch();
    let isNextButtonDisabled = page === lastPage;
    let isPreviousButtonDisabled = page === 1;
    const handleSelectPage = (page) => {
        dispatch(paginationSlice.actions.setPage(page));
    };

    const handleNextPage = () => {
        if (page <= lastPage) {
            dispatch(paginationSlice.actions.setPage(page + 1));
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            dispatch(paginationSlice.actions.setPage(page - 1));
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div id="pagination" className={cx('pagination-filter')}>
                <Button
                    circle
                    className={cx('item-pagi')}
                    disabled={isPreviousButtonDisabled}
                    onClick={handlePreviousPage}
                    data-link="prev"
                    title="« Previous"
                >
                    <img
                        src="https://file.hstatic.net/200000532849/file/vector_48406eb0858542e984d8e577a2748fa5.svg"
                        data-src="https://file.hstatic.net/200000532849/file/vector_48406eb0858542e984d8e577a2748fa5.svg"
                        alt="Prev"
                    />
                </Button>
                {Array.from({ length: lastPage }).map((_, index) =>
                    index + 1 === page ? (
                        <Button circle className={cx('item-pagi', 'active')} onClick={(e) => e.preventDefault()}>
                            {index + 1}
                        </Button>
                    ) : (
                        <Button circle className={cx('item-pagi')} onClick={() => handleSelectPage(index + 1)}>
                            {index + 1}
                        </Button>
                    ),
                )}

                <Button
                    circle
                    className={cx('item-pagi')}
                    disabled={isNextButtonDisabled}
                    onClick={handleNextPage}
                    data-link="next"
                    title="Next »"
                >
                    <img
                        src="https://file.hstatic.net/200000532849/file/vector_6ac6da358ec94eb8b677ebb156c68f56.svg"
                        data-src="https://file.hstatic.net/200000532849/file/vector_6ac6da358ec94eb8b677ebb156c68f56.svg"
                        alt="Next"
                    />
                </Button>
            </div>
        </div>
    );
}

export default Pagination;
