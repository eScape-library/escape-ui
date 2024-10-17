import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <div className={cx('wrapper')}>
            <div id="pagination" className={cx('pagination-filter')}>
                <a
                    className={cx('item-pagi', 'pagi-prev')}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    data-link="prev"
                    title="« Previous"
                >
                    <img
                        src="https://file.hstatic.net/200000532849/file/vector_48406eb0858542e984d8e577a2748fa5.svg"
                        data-src="https://file.hstatic.net/200000532849/file/vector_48406eb0858542e984d8e577a2748fa5.svg"
                        alt="Prev"
                    />
                </a>
                <a className={cx('item-pagi')} href="#" onClick={(e) => e.preventDefault()} data-link="1">
                    1
                </a>
                <a className={cx('item-pagi')} href="#" onClick={(e) => e.preventDefault()} data-link="2">
                    2
                </a>
                <span className={cx('item-pagi', 'active')} data-link="3">
                    3
                </span>
                <a className={cx('item-pagi')} href="#" onClick={(e) => e.preventDefault()} data-link="4">
                    4
                </a>
                <a
                    className={cx('item-pagi', 'pagi-next')}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    data-link="next"
                    title="Next »"
                >
                    <img
                        src="https://file.hstatic.net/200000532849/file/vector_6ac6da358ec94eb8b677ebb156c68f56.svg"
                        data-src="https://file.hstatic.net/200000532849/file/vector_6ac6da358ec94eb8b677ebb156c68f56.svg"
                        alt="Next"
                    />
                </a>
            </div>
        </div>
    );
}

export default Pagination;
