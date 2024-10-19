import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('')}>
            <div className={cx('main-account-info')}>
                <div className={cx('heading-account-info')}>TÀI KHOẢN ĐĂNG NHẬP</div>
                <div className={cx('content-account-info')}>
                    <div className={cx('item-account-info')}>
                        <label>Tên đăng nhập</label>
                        <span>hatran3072003@gmail.com</span>
                    </div>
                    <div className={cx('item-account-info', 'item-account-info-btn')}>
                        <label></label>
                        <span>
                            <Button defaultBtn>Đổi mật khẩu</Button>
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
                        <span>DNA</span>
                    </div>
                    <div className={cx('item-account-info')}>
                        <label>Ngày sinh</label>
                        <span></span>
                    </div>
                    <div className={cx('item-account-info')}>
                        <label>Giới tính</label>
                        <span>Nữ</span>
                    </div>
                    <div className={cx('item-account-info')}>
                        <label>Số điện thoại</label>
                        <span></span>
                    </div>
                    <div className={cx('item-account-info', 'item-account-info-btn')}>
                        <label></label>
                        <span>
                            <Button fullfill>Cập nhật thông tin</Button>
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
                        value="hatran3072003@gmail.com"
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
