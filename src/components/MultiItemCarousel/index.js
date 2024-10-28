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
        productImage:
            'https://product.hstatic.net/200000642007/product/07pkm_3atsn0343_1_05e8ff7849804658b83b742bcc55229b_3fce77bba63240139cba860f6129a782_master.jpg',
        subImage:
            'https://product.hstatic.net/200000642007/product/07pkm_3atsn0343_2_7346ec7ae281413f98fb06f39a4aa10a_001fff5cf976498b825497b3ad5deebe_master.jpg',
        productName: 'Áo thun unisex cổ tròn tay ngắn Vintage Big Logo Graphic',
        price: '1,690,000',
        otherColors: 'Pink,White',
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
