import classNames from 'classnames/bind';
import styles from './UpdateProfile.module.scss';
import Title from '../Form/Title';
import Form from '../Form';
import FormItem from '../Form/FormItem';
import Label from '../Form/Label';
import Input from '../Form/Input';
import Button from '../Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../pages/Account/Profile/userSlice';
import { isUpdatedSelector, userSelector } from '../../redux/selectors';
import Notification from '../Form/Notification';

const cx = classNames.bind(styles);

function UpdateProfile() {
    const dispatch = useDispatch();
    const isUpdated = useSelector(isUpdatedSelector);
    const user = useSelector(userSelector);

    const handleSubmit = (values) => {
        dispatch(updateProfile(values));
    };
    const formik = useFormik({
        initialValues: {
            fullName: user.fullName,
            dateOfBirth: user.dateOfBirth,
            phoneNumber: user.phoneNumber,
        },
        validationSchema: Yup.object({
            phoneNumber: Yup.string().matches(/^\d{10}$/, 'Số điện thoại không hợp lệ!'),
        }),
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });
    return (
        <div className={cx('update-profile')}>
            <Title title="Cập nhật thông tin" />
            {isUpdated && <Notification success text="Cập nhật thành công!" />}
            <div>
                <Form onSubmit={formik.handleSubmit}>
                    <FormItem>
                        <Label title="Tên" />
                        <Input
                            type="text"
                            name="fullName"
                            placeholder="Full name"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                        />
                    </FormItem>
                    <FormItem>
                        <Label title="Ngày sinh" />
                        <Input
                            type="date"
                            name="dateOfBirth"
                            placeholder="Date of birth"
                            value={formik.values.dateOfBirth}
                            onChange={formik.handleChange}
                        />
                    </FormItem>
                    <FormItem>
                        <Label title="Số điện thoại" />
                        <Input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone number"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                        />
                    </FormItem>
                    {formik.errors.phoneNumber && <Notification error text={formik.errors.phoneNumber} />}
                    <FormItem>
                        <Button fullfill>Cập nhật</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    );
}

export default UpdateProfile;
