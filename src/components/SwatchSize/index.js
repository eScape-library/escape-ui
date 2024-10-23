import classNames from 'classnames/bind';
import styles from './SwatchSize.module.scss';

const cx = classNames.bind(styles);

const sample = [
    {
        size: 'XS',
    },
    {
        size: 'S',
    },
    {
        size: 'M',
    },
];

function SwatchSize({ data = sample }) {
    return (
        <div className={cx('swatch-size')} data-index="option2">
            {data.map((item, index) => (
                <div className={cx('item-swatch')} key={index}>
                    {item.size}
                </div>
            ))}
            <div className={cx('item-swatch', 'active')} data-option2="L">
                L
            </div>
            <div className={cx('item-swatch', 'soldout')} data-option2="XL">
                XL
            </div>
        </div>
    );
}

export default SwatchSize;
