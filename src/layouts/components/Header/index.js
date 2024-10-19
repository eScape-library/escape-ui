import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Menu from '../../../components/Popper/Menu';
import MiniSearch from '../../../components/MiniSearch';
import { useState } from 'react';

const cx = classNames.bind(styles);

const datas = [
    {
        name: 'Áo thun',
    },
    {
        name: 'Áo sơ mi',
    },
    {
        name: 'Áo khoác lông',
    },
];

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <i>eScape</i>
                </div>
                <div className={cx('menu')}>
                    <nav>
                        <ul>
                            <li>
                                <Menu datas={datas}>
                                    <p className={cx('nav-item')}>ÁO QUẦN</p>
                                </Menu>
                            </li>
                            <li>
                                <Menu datas={datas}>
                                    <p className={cx('nav-item')}>ÁO QUẦN</p>
                                </Menu>
                            </li>
                            <li>
                                <Menu datas={datas}>
                                    <p className={cx('nav-item')}>ÁO QUẦN</p>
                                </Menu>
                            </li>
                            <li className={cx('line-menu')}>|</li>
                        </ul>
                    </nav>
                </div>
                <div className={cx('right')}>
                    <div
                        className={cx('right-icon', 'search-icon')}
                        onClick={() => {
                            setShowSearch(true);
                        }}
                    >
                        <a className={cx('')} href="#">
                            <img
                                src="https://file.hstatic.net/200000642007/file/icon-search_f3577f42c6314038a0636c20100bd8d9.svg"
                                data-src="https://file.hstatic.net/200000642007/file/icon-search_f3577f42c6314038a0636c20100bd8d9.svg"
                                alt="Icon search"
                                width="24"
                                height="24"
                            />
                        </a>
                    </div>
                    <div className={cx('right-icon', 'cart-icon')}>
                        <a href="#">
                            <span className={cx('item-count-header')}>1</span>
                            <img
                                src="https://file.hstatic.net/200000642007/file/icon-cart_d075fce117f74a07ae7f149d8943fc33.svg"
                                data-src="https://file.hstatic.net/200000642007/file/icon-cart_d075fce117f74a07ae7f149d8943fc33.svg"
                                alt="Icon cart"
                                width="24"
                                height="24"
                            />
                        </a>
                    </div>
                    <div className={cx('right-icon', 'wishlist-icon')}>
                        <a href="#">
                            <img
                                src="https://file.hstatic.net/200000642007/file/icon-wishlist_86d7262a56ae455fa531e6867655996d.svg"
                                data-src="https://file.hstatic.net/200000642007/file/icon-wishlist_86d7262a56ae455fa531e6867655996d.svg"
                                alt="Icon wishlist"
                                width="24"
                                height="24"
                            />
                        </a>
                    </div>
                    <div className={cx('right-icon', 'profile-icon')}>
                        <a href="#">
                            <img
                                src="https://file.hstatic.net/200000642007/file/icon-account_5d386c88832c4872b857c0da62a81bbc.svg"
                                data-src="https://file.hstatic.net/200000642007/file/icon-account_5d386c88832c4872b857c0da62a81bbc.svg"
                                alt="Icon account"
                                width="24"
                                height="24"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <MiniSearch showSearch={showSearch} callback={(data) => setShowSearch(data)} />
        </header>
    );
}

export default Header;
