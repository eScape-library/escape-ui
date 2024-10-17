import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ className }) {
    return (
        <div className={className}>
            <div className={cx('media')}>
                <a className={cx('image')}>
                    <picture>
                        <img
                            src="https://product.hstatic.net/200000642007/product/50ivs_3atsv2143_1_bc24aeae61864aac8fd717a2e5837448_34181f53e68d4b439b1bc95d333cbd79_master.jpg"
                            alt=""
                        ></img>
                    </picture>
                    <picture>
                        <img
                            class="img-loop img-hover ls-is-cached lazyloaded"
                            data-src="//product.hstatic.net/200000642007/product/50ivs_3atsv2143_2_c2e6791e82104364a58844934033e4ed_8bc50bc8e4404c819ea48eab8e7615ef_grande.jpg"
                            src="//product.hstatic.net/200000642007/product/50ivs_3atsv2143_2_c2e6791e82104364a58844934033e4ed_8bc50bc8e4404c819ea48eab8e7615ef_grande.jpg"
                            alt=" MLB - Áo thun unisex cổ tròn tay ngắn Sportive Varsity Track "
                        />
                    </picture>
                </a>
                <div className={cx('icon-addtocart-loop')}>
                    <img
                        alt="Áo thun unisex cổ tròn tay ngắn Sportive Varsity Track"
                        src="https://file.hstatic.net/200000642007/file/shopping-cart_3475f727ea204ccfa8fa7c70637d1d06.svg"
                    />
                </div>
            </div>

            <div className={cx('details')}>
                <div className={cx('title')}>
                    <p>
                        <a>Áo thun unisex cổ tròn tay ngắn Sportive Varsity Track</a>
                    </p>
                </div>
                <div className={cx('price')}>
                    <span>1,690,000₫</span>
                </div>
                <div className={cx('variant')}>
                    <div className={cx('item-variant')}>
                        <a
                            aria-label="icon"
                            title="icon"
                            href="/products/mlb-ao-thun-unisex-co-tron-tay-ngan-sportive-varsity-track-3atsv2143-2"
                        >
                            <img
                                data-src="https://product.hstatic.net/200000642007/product/icon_50ivs_3atsv2143_83535f06639c421aaa54eadfd96ccbd3_23b45f737e9442689ba5b4d41d58539c.jpg"
                                alt="Icon"
                                src="https://product.hstatic.net/200000642007/product/icon_50ivs_3atsv2143_83535f06639c421aaa54eadfd96ccbd3_23b45f737e9442689ba5b4d41d58539c.jpg"
                            />
                        </a>
                    </div>
                    <div className={cx('item-variant')}>
                        <a
                            aria-label="icon"
                            title="icon"
                            href="/products/mlb-ao-thun-unisex-co-tron-tay-ngan-sportive-varsity-track-3atsv2143-2"
                        >
                            <img
                                data-src="https://product.hstatic.net/200000642007/product/icon_50ivs_3atsv2143_83535f06639c421aaa54eadfd96ccbd3_23b45f737e9442689ba5b4d41d58539c.jpg"
                                alt="Icon"
                                src="https://product.hstatic.net/200000642007/product/icon_50ivs_3atsv2143_83535f06639c421aaa54eadfd96ccbd3_23b45f737e9442689ba5b4d41d58539c.jpg"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
