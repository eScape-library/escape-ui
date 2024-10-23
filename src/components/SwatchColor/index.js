import classNames from 'classnames/bind';
import styles from './SwatchColor.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const sample = [
    {
        id: '1',
        color: 'black',
    },
    {
        id: '1',
        color: 'white',
    },
];

const colors = [
    {
        name: 'black',
        value: 'https://product.hstatic.net/200000642007/product/icon_43bks_3atsv2143_f05621cba4bd4f908c17ca5f0b0dc5a2_80a084a3b2fe45eabd62cee76666e342.jpg',
    },
    {
        name: 'white',
        value: 'https://product.hstatic.net/200000642007/product/icon_50ivs_3atsv2143_83535f06639c421aaa54eadfd96ccbd3_23b45f737e9442689ba5b4d41d58539c.jpg',
    },
];

function SwatchColor({ data = sample }) {
    return (
        <div className={cx('swatch-color')}>
            {data.map((item, index) => (
                <div
                    key={index}
                    className={cx('item-swatch')}
                    data-url="/products/mlb-ao-thun-unisex-co-tron-tay-ngan-sportive-varsity-track-3atsv2143-1"
                >
                    <img src={colors.find((color) => color.name === item.color).value} alt="43bks" />
                </div>
            ))}
        </div>
    );
}

export default SwatchColor;
