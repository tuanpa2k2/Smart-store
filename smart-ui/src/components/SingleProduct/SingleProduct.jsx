import { useState } from 'react';

import RelatedProducts from './RelatedProducts/RelatedProducts';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCartPlus } from 'react-icons/fa';

import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import './SingleProduct.scss';

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const decrement = () => {
        setQuantity((prev) => {
            if (prev === 1) {
                return 1;
            }
            return prev - 1;
        });
    };
    const increment = () => {
        setQuantity((prev) => prev + 1);
    };

    if (!data) return;
    const product = data.data[0].attributes;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="text-price">
                            Price:
                            <span className="price">{product.price} $</span>
                        </span>
                        <span className="desc">{product.desc}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-card-button">
                                <FaCartPlus size={20} />
                                <p>ADD TO CART</p>
                            </button>
                        </div>

                        <span className="divider" />

                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>{product.categories.data[0].attributes.title}</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
            </div>
        </div>
    );
};

export default SingleProduct;
