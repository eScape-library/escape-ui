import classNames from 'classnames/bind';
import styles from './Address.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Address() {
    return (
        <div className={cx('content-addresses')}>
            <div className={cx('list-item-addresses')}>
                <div className={cx('item-addresses', 'isDefault')}>
                    <div className={cx('info--addresses')}>
                        <div className={cx('head--addresses')}>
                            <div className={cx('name-address')}>
                                <span>Mặc định</span>
                                DNA
                            </div>
                            <div className={cx('action--address')}>
                                <a href="javascript:void(0);" className={cx('update-addresses')}>
                                    Cập nhật
                                </a>
                            </div>
                        </div>
                        <div className={cx('content--addresses')}>
                            <div className={cx('list-info--addresses')}>
                                <label>Địa chỉ:</label>
                                <span>, Vietnam </span>
                            </div>
                            <div className={cx('list-info--addresses')}>
                                <label>Số điện thoại:</label>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('action-addresses')}>
                <Button defaultBtn href="#" className={cx('action-addresses-button')}>
                    Thêm địa chỉ giao hàng
                </Button>
            </div>
        </div>
    );
}

export default Address;
