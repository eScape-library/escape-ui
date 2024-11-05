import classNames from 'classnames/bind';
import styles from './SwatchColor.module.scss';
import { useNavigate } from 'react-router-dom';
import { colors as colorsSample } from '../../sampleDatas';

const cx = classNames.bind(styles);

function SwatchColor({ data, activeColor }) {
    const navigate = useNavigate();

    return (
        <div className={cx('swatch-color')}>
            {data?.map((item, index) => (
                <div
                    key={index}
                    className={cx('item-swatch', activeColor === item.variantColor.color && 'active')}
                    onClick={() => navigate(`/details/${item.variantColor.productDetailsId}`)}
                >
                    <img src={colorsSample.find((color) => color.name === item.variantColor.color).image} alt="43bks" />
                </div>
            ))}
        </div>
    );
}

export default SwatchColor;
