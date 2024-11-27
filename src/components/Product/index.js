import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { colors } from '../../sampleDatas';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors';
import { useState } from 'react';
import Notification from '../../components/Notification';
import { addToCart } from '../../pages/Cart/cartSlice';

const cx = classNames.bind(styles);

function Product({ className, data = {} }) {
    const [addToCartSuccess, setAddToCartSuccess] = useState(false);
    var orthers = data.availableColors.split(',');
    const navigate = useNavigate();
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const handleClick = () => {
        navigate(`/details/${data.productDetailsId}`);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ userId: user.userId, productDetailsId: data.productDetailsId, quantity: 1 })).then(() =>
            setAddToCartSuccess(true),
        );
    };

    return (
        <div className={className}>
            <div className={cx('media')}>
                <a className={cx('image')}>
                    <picture>
                        <img src={data.productImage} alt={data.productName}></img>
                    </picture>
                    <picture>
                        <img src={data.subImage} alt={data.productName} />
                    </picture>
                </a>
                <div className={cx('icon-addtocart-loop')} onClick={handleAddToCart}>
                    <img
                        alt={data.productName}
                        src="https://file.hstatic.net/200000642007/file/shopping-cart_3475f727ea204ccfa8fa7c70637d1d06.svg"
                    />
                </div>
            </div>

            <div className={cx('details')}>
                <div className={cx('title')} onClick={handleClick}>
                    <p>
                        <a>{data.productName}</a>
                    </p>
                </div>
                <div className={cx('price')}>
                    <span>{data.price}₫</span>
                </div>
                <div className={cx('variant')}>
                    {orthers.map((item, index) => (
                        <div className={cx('item-variant')} key={index}>
                            <a aria-label="icon" title="icon">
                                <img alt="Icon" src={colors.find((c) => c.name === item).image} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {addToCartSuccess === true && (
                <Notification
                    title="Đã thêm vào giỏ hàng!"
                    product={data}
                    callback={(state) => setAddToCartSuccess(state)}
                />
            )}
        </div>
    );
}

export default Product;
