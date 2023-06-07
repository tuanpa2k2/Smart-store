import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs'; // Empty cart

import { Context } from '../../utils/context';
import CartItem from './CartItem/CartItem';
import './Cart.scss';
const Cart = ({ setShowCart }) => {
    const { cartItems, cartSubTotal } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    {/* nhận prop setShowCart để nhận handle onclick btn-close */}
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <span className="text">Close</span>
                        <MdClose />
                    </span>
                </div>

                {!cartItems?.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No product in the cart</span>
                        <button
                            className="return-cta"
                            onClick={() => {
                                navigate('/');
                                setShowCart(false);
                            }}
                        >
                            RETURN TO SHOP
                        </button>
                    </div>
                )}

                {!!cartItems?.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Total money:</span>
                                <span className="text total">$ {cartSubTotal}</span>
                            </div>
                            <div className="button">
                                <button className="checkout-cta">Checkout</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
