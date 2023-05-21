import './Products.scss';
import Product from './Product/Product';

const Products = ({ innerPage, headingText }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {/* {product.data[index].map((index) => (
                <Product key={index.id} product={image}/>
            ))} */}
                {/* {products.map((id) => (
                <Product key={id} images={image}/>
            ))} */}
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default Products;
