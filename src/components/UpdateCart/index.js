import classNames from 'classnames/bind';
import styles from './UpdateCart.module.scss';
import Button from '../Button';
import SwatchColor from '../SwatchColor';
import SwatchSize from '../SwatchSize';
import * as ProductDetailsService from '../../apiServices/productDetailsService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '../../pages/Cart/cartSlice';
import Notification from '../Notification';
const cx = classNames.bind(styles);

function UpdateCart({ cart, callback }) {
    const [pDId, setPDId] = useState(cart.productDetailsId);
    const [quantity, setQuantity] = useState(cart.quantity);
    const [product, setProduct] = useState({});
    const [sizeVariants, setSizeVariants] = useState([]);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const dispatch = useDispatch();

    const increaseQuantity = () => {
        setQuantity((quantity) => ++quantity);
    };

    const decreaseQuantity = () => {
        setQuantity((quantity) => --quantity);
    };

    const updateCart = () => {
        dispatch(
            updateCartItem({
                cartId: cart.cartId,
                productDetailsId: pDId,
                quantity,
            }),
        ).then(() => setUpdateSuccess(true));
    };

    useEffect(() => {
        ProductDetailsService.getProductDetailsById(pDId)
            .then((data) => setProduct(data))
            .catch((err) => console.log(err));
    }, [pDId]);

    useEffect(() => {
        var variant = product?.variants?.find((variant) => {
            for (const element of variant.variantSize) {
                if (element.productDetailsId === product.product?.productDetailsId) return true;
            }
        });
        if (variant !== undefined) setSizeVariants(variant?.variantSize);
    }, [product]);

    return (
        <div className={cx('update-items')}>
            <div className={cx('product-image')}>
                <img src={product.product?.productImage} alt={product.product?.productName} />
            </div>
            <div className={cx('product-info')}>
                <div className={cx('heading')}>
                    <h2>{product.product?.productName}</h2>
                </div>
                <SwatchColor
                    data={product?.variants}
                    activeColor={product?.product?.color}
                    callback={(id) => setPDId(id)}
                />
                <SwatchSize data={sizeVariants} activeSize={product?.product?.size} callback={(id) => setPDId(id)} />
                <div className={cx('product-quantity')}>
                    <div className={cx('wrapper-quantity')}>
                        <Button className={cx('btn-minus')} onClick={decreaseQuantity} disabled={quantity === 1}>
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
                        </Button>
                        <input className={cx('input-quantity')} type="text" value={quantity} max="" />
                        <Button
                            className={cx('btn-plus')}
                            onClick={increaseQuantity}
                            disabled={quantity === product.product?.quantity}
                        >
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
                        </Button>
                    </div>
                </div>
                <div className={cx('action')}>
                    <Button className={cx('action-button')} defaultBtn onClick={() => callback(false)}>
                        Hủy
                    </Button>
                    <Button className={cx('action-button')} fullfill onClick={updateCart}>
                        Cập nhật
                    </Button>
                </div>
            </div>
            {updateSuccess && <Notification title="Cập nhật thành công!" />}
        </div>
    );
}

export default UpdateCart;
