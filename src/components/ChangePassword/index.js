import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';
import Title from '../Form/Title';
import Form from '../Form';
import FormItem from '../Form/FormItem';
import Label from '../Form/Label';
import Input from '../Form/Input';
import Button from '../Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../pages/Account/Profile/userSlice';
import { isUpdatedSelector } from '../../redux/selectors';
import Notification from '../Form/Notification';

const cx = classNames.bind(styles);

function ChangePassword() {
    const dispatch = useDispatch();
    const isUpdated = useSelector(isUpdatedSelector);
    const handleSubmit = (values) => {
        dispatch(changePassword(values));
    };
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required('Cần nhập thông tin!')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    'Mật khẩu cần ít nhất 8 kí tự bao gồm ít nhất 1 kí tự thường và số!',
                ),
            confirmPassword: Yup.string()
                .required('Cần nhập thông tin!')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu nhập lại không chính xác!'),
        }),
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });
    return (
        <div className={cx('popup')}>
            <div className={cx('reset-password-inner')}>
                <Title title="Đổi mật khẩu" />
                {isUpdated && <Notification success text="Đổi mật khẩu thành công!" />}
                <div className={cx('inner-form-update')}>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormItem>
                            <Label title="Mật khẩu mới" />
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </FormItem>
                        {formik.errors.password && <Notification text={formik.errors.password} error />}
                        <FormItem>
                            <Label title="Xác nhận mật khẩu mới" />
                            <Input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                            />
                        </FormItem>
                        {formik.errors.confirmPassword && <Notification text={formik.errors.confirmPassword} error />}
                        <FormItem>
                            <Button fullfill>Xác nhận</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
