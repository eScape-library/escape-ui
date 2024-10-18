import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading';
import LoadingModal from '../LoadingModal';
import Product from '../Product';

import classNames from 'classnames/bind';
import styles from './MultiItemCarousel.module.scss';

const cx = classNames.bind(styles);
const items = [
    {
        firstImage:
            'https://product.hstatic.net/200000642007/product/50ivs_3atsv2143_1_bc24aeae61864aac8fd717a2e5837448_34181f53e68d4b439b1bc95d333cbd79_master.jpg',
        secondImage:
            '//product.hstatic.net/200000642007/product/50ivs_3atsv2143_2_c2e6791e82104364a58844934033e4ed_8bc50bc8e4404c819ea48eab8e7615ef_grande.jpg',
        title: 'Áo thun unisex cổ tròn tay ngắn Sportive Varsity Track',
        price: '1,690,000',
    },
    {
        firstImage:
            'https://product.hstatic.net/200000642007/product/50bks_3atsn0143_1_07c30648de364dbc9f906d2b8cf7f7d0_b62e628af6a948e99772e666ed616c9a_master.jpg',
        secondImage:
            'https://product.hstatic.net/200000642007/product/50bks_3atsn0143_2_138dc13f66d54ad085253289f633c1b7_a938ef2cb92c4e5289889aa4c2e3914f_master.jpg',
        title: 'Áo thun unisex cổ tròn tay ngắn Vintage CityLife Graphic',
        price: '1,690,000',
    },
    {
        firstImage:
            'https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_1_d877e9cfa8a84aa49458688f95c60c8e_6738a4cb169746a782b6a1061b18e8e9_master.jpg',
        secondImage:
            'https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_2_8052be58c007435481e4a81eff6bee25_e07a994b9c2a4534b15391f0733b6255_master.jpg',
        title: 'Áo thun unisex cổ tròn tay ngắn Basic Mega Logo',
        price: '1,690,000',
    },
    {
        firstImage:
            'https://product.hstatic.net/200000642007/product/50ivs_3atsv2143_1_bc24aeae61864aac8fd717a2e5837448_34181f53e68d4b439b1bc95d333cbd79_master.jpg',
        secondImage:
            '//product.hstatic.net/200000642007/product/50ivs_3atsv2143_2_c2e6791e82104364a58844934033e4ed_8bc50bc8e4404c819ea48eab8e7615ef_grande.jpg',
        title: 'Áo thun unisex cổ tròn tay ngắn Sportive Varsity Track',
        price: '1,690,000',
    },
    {
        firstImage:
            'https://product.hstatic.net/200000642007/product/50bks_3atsn0143_1_07c30648de364dbc9f906d2b8cf7f7d0_b62e628af6a948e99772e666ed616c9a_master.jpg',
        secondImage:
            'https://product.hstatic.net/200000642007/product/50bks_3atsn0143_2_138dc13f66d54ad085253289f633c1b7_a938ef2cb92c4e5289889aa4c2e3914f_master.jpg',
        title: 'Áo thun unisex cổ tròn tay ngắn Vintage CityLife Graphic',
        price: '1,690,000',
    },
    {
        firstImage:
            'https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_1_d877e9cfa8a84aa49458688f95c60c8e_6738a4cb169746a782b6a1061b18e8e9_master.jpg',
        secondImage:
            'https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_2_8052be58c007435481e4a81eff6bee25_e07a994b9c2a4534b15391f0733b6255_master.jpg',
        title: 'Áo thun unisex cổ tròn tay ngắn Basic Mega Logo',
        price: '1,690,000',
    },
];

function MultiItemCarousel({ datas = items, title, className }) {
    let countClick = useRef(datas.length / 5);
    let boodWidth = 255;
    let move = boodWidth * 5;
    let prevDisabled, nextDisabled;
    const navigate = useNavigate();

    const [limit, setLimit] = useState(countClick.current);
    const [state, setState] = useState(0);
    const [loading, setLoading] = useState(false);

    if (limit <= 1) nextDisabled = true;
    if (limit >= countClick.current) prevDisabled = true;

    const handleNextSlide = () => {
        if (limit <= 1) {
            return;
        } else {
            setLimit((prev) => prev - 1);
            setState((prev) => prev + move);
        }
    };

    const handlePrevSlide = () => {
        if (limit >= countClick.current) {
            return;
        } else {
            setLimit((prev) => prev + 1);
            setState((prev) => prev - move);
        }
    };

    const classes = cx('wrapper', {
        [className]: className,
    });
    // const navigateToDetail = () => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //         navigate('/details');
    //     }, 1500);
    // };
    // if (loading) {
    //     return <LoadingModal show={loading} />;
    // }
    return (
        <div className={classes}>
            <div className={cx('header')}>
                <h4 className={cx('header-title')}>{title}</h4>
            </div>

            <div className={cx('container')}>
                <div className={cx('sliders')} style={{ transform: `translate3d(${-state}px, 0, 0)` }}>
                    {items.map((product, index) => (
                        <div key={index} className={cx('poduct')}>
                            <Product data={product} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('control-btn')}>
                <FontAwesomeIcon
                    className={cx('prev-btn', { active: prevDisabled })}
                    icon={faChevronLeft}
                    onClick={handlePrevSlide}
                />
                <FontAwesomeIcon
                    className={cx('next-btn', { active: nextDisabled })}
                    icon={faChevronRight}
                    onClick={handleNextSlide}
                />
            </div>
        </div>
    );
}

export default MultiItemCarousel;
