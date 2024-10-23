import classNames from 'classnames/bind';
import styles from './UpdateCart.module.scss';
import Button from '../Button';
import SwatchColor from '../SwatchColor';
import SwatchSize from '../SwatchSize';
const cx = classNames.bind(styles);

function UpdateCart() {
    return (
        <div className={cx('update-items')}>
            <div className={cx('product-image')}>
                <img
                    src="https://product.hstatic.net/200000642007/product/50pkm_3amtv0844_1_9e1a6bb36e1c48d2a04e37b9ca58131e_bf5d75661616437da190900b35c55810.jpg"
                    alt=""
                />
            </div>
            <div className={cx('product-info')}>
                <div className={cx('heading')}>
                    <h2>eScape - Áo sweatshirt unisex cổ bẻ tay dài Varsity Sportive </h2>
                </div>
                <SwatchColor />
                <SwatchSize />
                <div className={cx('product-quantity')}>
                    <div className={cx('wrapper-quantity')}>
                        <button className={cx('btn-minus')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                {' '}
                                <path
                                    d="M6 10H14"
                                    stroke="#D0D0D0"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                ></path>{' '}
                            </svg>
                        </button>
                        <input className={cx('input-quantity')} type="text" value="1" max="" />
                        <button className={cx('btn-plus')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                {' '}
                                <path
                                    d="M10 5V15"
                                    stroke="black"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                ></path>{' '}
                                <path d="M5 10H15" stroke="black" strokeLinecap="square" strokeLinejoin="round"></path>{' '}
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={cx('action')}>
                    <Button className={cx('action-button')} defaultBtn>
                        Huy
                    </Button>
                    <Button className={cx('action-button')} fullfill>
                        Cap nhat
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default UpdateCart;
