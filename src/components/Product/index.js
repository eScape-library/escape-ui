import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { colors } from '../../sampleDatas';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

const sample = [
    {
        productImage:
            'https://product.hstatic.net/200000642007/product/07pkm_3atsn0343_1_05e8ff7849804658b83b742bcc55229b_3fce77bba63240139cba860f6129a782_master.jpg',
        subImage:
            'https://product.hstatic.net/200000642007/product/07pkm_3atsn0343_2_7346ec7ae281413f98fb06f39a4aa10a_001fff5cf976498b825497b3ad5deebe_master.jpg',
        productName: 'Áo thun unisex cổ tròn tay ngắn Vintage Big Logo Graphic',
        price: '1,690,000',
        availableColors: 'Pink,White',
    },
];

function Product({ className, data = sample }) {
    var orthers = data.availableColors.split(',');
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/details/${data.productDetailsId}`);
    };

    return (
        <div className={className} onClick={handleClick}>
            <div className={cx('media')}>
                <a className={cx('image')}>
                    <picture>
                        <img src={data.productImage} alt={data.productName}></img>
                    </picture>
                    <picture>
                        <img src={data.subImage} alt={data.productName} />
                    </picture>
                </a>
                <div className={cx('icon-addtocart-loop')}>
                    <img
                        alt={data.productName}
                        src="https://file.hstatic.net/200000642007/file/shopping-cart_3475f727ea204ccfa8fa7c70637d1d06.svg"
                    />
                </div>
            </div>

            <div className={cx('details')}>
                <div className={cx('title')}>
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
        </div>
    );
}

export default Product;
