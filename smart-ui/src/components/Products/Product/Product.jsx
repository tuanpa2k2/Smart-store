import { useNavigate } from 'react-router-dom';

import './Product.scss';

const Product = ({ id, data }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="product-card" onClick={() => navigate('/product/' + id)}>
                <div className="thumbnail">
                    <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
                </div>

                <div className="prod-details">
                    <span className="name">{data.title}</span>
                    <span className="text-price">
                        Price:
                        <span className="price">${data.price}</span>
                    </span>
                </div>

                <div className="btn-add-cart">Add to cart</div>
            </div>
        </>
    );
};

export default Product;
