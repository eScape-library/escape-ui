import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Button from '../../../components/Button';
import { useState } from 'react';
import Popup from '../../../components/Popup';
import ChangePassword from '../../../components/ChangePassword';
import UpdateProfile from '../../../components/UpdateProfile';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../../redux/selectors';
import userSlice from './userSlice';

const cx = classNames.bind(styles);

function Profile() {
    const [showChangePasswordPopup, setShowChangePasswordPopup] = useState(false);
    const [showUpdateProfilePopup, setShowUpdateProfilePopup] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    const handleUpdateProfile = () => {
        setShowUpdateProfilePopup(!showUpdateProfilePopup);
        dispatch(userSlice.actions.setUpdated(false));
    };

    return (
        <div className={cx('')}>
            <div className={cx('main-account-info')}>
                <div className={cx('heading-account-info')}>TÀI KHOẢN ĐĂNG NHẬP</div>
                <div className={cx('content-account-info')}>
                    <div className={cx('item-account-info')}>
                        <label>Tên đăng nhập</label>
                        <span>{user?.userName}</span>
                    </div>
                    <div className={cx('item-account-info', 'item-account-info-btn')}>
                        <label></label>
                        <span>
                            <Button defaultBtn onClick={() => setShowChangePasswordPopup(!showChangePasswordPopup)}>
                                Đổi mật khẩu
                            </Button>
                            {/* <button className={cx('btn-account-info', 'change-password')}>Đổi mật khẩu</button> */}
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('form-account-info')}>
                <div className={cx('heading-account-info')}>TÀI KHOẢN</div>
                <div className={cx('content-account-info')}>
                    <div className={cx('item-account-info')}>
                        <label>Tên</label>
                        <span>{user?.fullName}</span>
                    </div>
                    <div className={cx('item-account-info')}>
                        <label>Ngày sinh</label>
                        <span>{user?.dateOfBirth}</span>
                    </div>
                    <div className={cx('item-account-info')}>
                        <label>Số điện thoại</label>
                        <span>{user?.phoneNumber}</span>
                    </div>
                    <div className={cx('item-account-info', 'item-account-info-btn')}>
                        <label></label>
                        <span>
                            <Button fullfill onClick={handleUpdateProfile}>
                                Cập nhật thông tin
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('email-account-info')}>
                <div className={cx('item-input-form')}>
                    <label className={cx('required')}>Email</label>
                    <input
                        required=""
                        className={cx('form-input')}
                        type="text"
                        name="email"
                        value={user?.email}
                        readOnly
                    />
                </div>
            </div>
            {showChangePasswordPopup && (
                <Popup setShowPopup={setShowChangePasswordPopup} maxWidth={500}>
                    <ChangePassword />
                </Popup>
            )}
            {showUpdateProfilePopup && (
                <Popup setShowPopup={setShowUpdateProfilePopup} maxWidth={500}>
                    <UpdateProfile />
                </Popup>
            )}
        </div>
    );
}

export default Profile;
