import { MdClose } from 'react-icons/md';
// import { BsCartX } from 'react-icons/bs'; // Empty cart

import CartItem from './CartItem/CartItem';

import './Cart.scss';
const Cart = ({ setShowCart }) => {
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

                {/* <div className="empty-cart">
                    <BsCartX />
                    <span>No product in the cart</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div> */}

                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Total money:</span>
                            <span className="text total">$6000</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta">Checkout</button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Cart;
