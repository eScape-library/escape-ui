import classNames from 'classnames/bind';
import styles from './Select.module.scss';

const cx = classNames.bind(styles);

function Select({className, name, type, options = []}) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    options = [
        {
            name: "Chọn giới tính",
            value: ""
        },
        {
            name: "Nam",
            value: ""
        },
        {
            name: "Nữ",
            value: ""
        },
        {
            name: "Khác",
            value: ""
        }
    ]

    return (
        <select className={classes} type={type} name={name}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
}

export default Select;
