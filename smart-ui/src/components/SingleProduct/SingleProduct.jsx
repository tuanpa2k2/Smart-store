import RelatedProducts from './RelatedProducts/RelatedProducts';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCartPlus } from 'react-icons/fa';

import prod from '../../assets/products/earbuds-prod-1.webp';
import './SingleProduct.scss';

const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">Product Name</span>
                        <span className="text-price">
                            Price:
                            <span className="price">$8000</span>
                        </span>
                        <span className="desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid nobis nulla
                            exercitationem incidunt perspiciatis minus. Consequuntur minima, labore assumenda eius,
                            natus atque id quidem, ut ipsa repudiandae quas. Sint. orem ipsum dolor, sit amet
                            consectetur adipisicing elit. Quia aliquid nobis nulla exercitationem incidunt perspiciatis
                            minus. Consequuntur minima, labore assumenda eius, natus atque id quidem, ut ipsa
                            repudiandae quas. Sint.
                        </span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
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
                                <span>Headphones</span>
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

                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
