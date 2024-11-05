import classNames from 'classnames/bind';
import styles from './SwatchSize.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SwatchSize({ data, activeSize }) {
    const [sizes, setSizes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setSizes(data);
    }, [data]);

    return (
        <div className={cx('swatch-size')} data-index="option2">
            {sizes?.map((item, index) => (
                <div
                    className={cx('item-swatch', activeSize === item?.size && 'active')}
                    key={index}
                    onClick={() => navigate(`/details/${item?.productDetailsId}`)}
                >
                    {item?.size}
                </div>
            ))}
            {/* <div className={cx('item-swatch', 'soldout')} data-option2="XL">
                XL
            </div> */}
        </div>
    );
}

export default SwatchSize;
