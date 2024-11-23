import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHeart, faFileText } from '@fortawesome/free-regular-svg-icons';
import { faHistory, faSignOut, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import Profile from './Profile';
import Recently from './Recently';
import Wishlist from './Wishlist';
import Order from './Order';
import Address from './Address';
import Button from '../../components/Button';
import * as authService from '../../apiServices/authService';

import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/authSlice';
import { jwtDecode } from 'jwt-decode';
import { getUser } from './Profile/userSlice';

const cx = classNames.bind(styles);

function Account() {
    const [active, setActive] = useState('profile');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handelLogout = () => {
        dispatch(logout({ navigate }));
    };

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const decodedData = jwtDecode(token);
            dispatch(getUser(decodedData.username));
        }
    }, []);

    return (
        <div className="container">
            <p className={cx('main-title')}>Quản lí tài khoản</p>
            <div className="row">
                <div className="col-md-3">
                    <div className={cx('left')}>
                        <div className={cx('user')}>
                            <img src="https://devo.vn/wp-content/uploads/2023/01/soc-vai-meo.jpg" alt="" />
                            <p>Tran Thi Thu Ha</p>
                        </div>
                        <hr />
                        <div className={cx('options')}>
                            <Button
                                className={cx('option-btn', { active: active === 'profile' })}
                                leftIcon={<FontAwesomeIcon icon={faUserCircle} />}
                                onClick={() => setActive('profile')}
                            >
                                Thông tin tài khoản
                            </Button>

                            <Button
                                className={cx('option-btn', { active: active === 'recently' })}
                                leftIcon={<FontAwesomeIcon icon={faHistory} />}
                                onClick={() => setActive('recently')}
                            >
                                Xem gần đây
                            </Button>
                            <Button
                                className={cx('option-btn', { active: active === 'wishlist' })}
                                leftIcon={<FontAwesomeIcon icon={faHeart} />}
                                onClick={() => setActive('wishlist')}
                            >
                                Sản phẩm yêu thích
                            </Button>
                            <Button
                                className={cx('option-btn', { active: active === 'order' })}
                                leftIcon={<FontAwesomeIcon icon={faFileText} />}
                                onClick={() => setActive('order')}
                            >
                                Thông tin đơn hàng
                            </Button>
                            <Button
                                className={cx('option-btn', { active: active === 'address' })}
                                leftIcon={<FontAwesomeIcon icon={faMapMarked} />}
                                onClick={() => setActive('address')}
                            >
                                Địa chỉ giao hàng
                            </Button>
                            <Button
                                onClick={handelLogout}
                                className={cx('option-btn')}
                                leftIcon={<FontAwesomeIcon icon={faSignOut} />}
                            >
                                Đăng xuất
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className={cx('right')}>
                        {active === 'profile' && <Profile />}
                        {active === 'recently' && <Recently />}
                        {active === 'wishlist' && <Wishlist />}
                        {active === 'order' && <Order />}
                        {active === 'address' && <Address />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
