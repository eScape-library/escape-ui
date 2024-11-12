import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faKey, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/Button';
import * as authService from '../../apiServices/authService';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [loginErr, setLoginErr] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [typeInputPassword, setTypeInputPassword] = useState(true);
    //const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleShowPassword = () => {
        setShowPassword((state) => !state);
        setTypeInputPassword((state) => !state);
    };

    const handleSubmit = (values) => {
        authService
            .login(values)
            .then(() => {
                navigate('/'); // Chuyển hướng khi đăng nhập thành công
                window.scrollTo(0, 0);
            })
            .catch(() => {
                setLoginErr(true); // Hiển thị lỗi đăng nhập
            });
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Cần nhập thông tin!'),
            password: Yup.string().required('Cần nhập thông tin!'),
        }),
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });
    return (
        <div className={cx('wrapper')}>
            <form action="" method="post" className={cx('form')} onSubmit={formik.handleSubmit}>
                <div className={cx('logo')}>
                    <h3>Đăng nhập</h3>
                </div>
                <div className={cx('external-login')}>
                    <div className={cx('google')}>
                        <p>Đăng nhập với google</p>
                    </div>
                </div>
                <div className={cx('divider')}>
                    <p>Hoặc</p>
                </div>
                <div className={cx('spacer')}></div>

                <div className={cx('form-group')}>
                    <div className={cx('input-form')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </span>
                        <input
                            className={cx('input')}
                            id="username"
                            type="text"
                            placeholder="Tên đăng nhập"
                            autoComplete="off"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                {formik.errors.username && <p className={cx('err-message')}>{formik.errors.username}</p>}
                <span></span>
                <div className={cx('form-group')}>
                    <div className={cx('input-form')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <span className={cx('icon-show')} onClick={handleShowPassword}>
                            {showPassword ? (
                                <FontAwesomeIcon className={cx('showPassword')} icon={faEye} />
                            ) : (
                                <FontAwesomeIcon className={cx('showPassword')} icon={faEyeSlash} />
                            )}
                        </span>
                        <input
                            className={cx('input')}
                            id="password"
                            type={typeInputPassword ? 'password' : 'text'}
                            placeholder="Nhập mật khẩu"
                            autoComplete="off"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                {formik.errors.password && <p className={cx('err-message')}>{formik.errors.password}</p>}
                <span></span>
                <Button type="submit" className={cx('submit')}>
                    Đăng nhập
                </Button>
                {/* {loginErr ? undefined : <p className={cx('err-message')}>Tài khoản hoặc mật khẩu chưa chính xác!</p>} */}
                <p className={cx('ask')}>
                    Quên mật khẩu?
                    <Button to="/register" underline className={cx('login')} href="">
                        Đăng ký
                    </Button>
                </p>
            </form>
        </div>
    );
}

export default Login;
