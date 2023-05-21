import './Product.scss';
import prod from '../../../assets/products/earbuds-prod-2.webp';
// import { LazyLoadImage } from "react-lazy-load-image-component";

// import { useEffect, useState } from "react";
// import axios from 'axios';

const Product = () => {
    // const [image, setImage] = useState();

    // useEffect(() => {
    //     const getImage = async () => {
    //         try {
    //             const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20');

    //             // console.log(res.data[0].url)
    //             setImage(res.data[0].url)
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     }

    //     getImage();
    // }, []);

    return (
        <>
            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod} alt="" />
                    {/* <LazyLoadImage src={prod} alt="Image Alt"/> */}
                </div>

                <div className="prod-details">
                    <span className="name">Product Name</span>
                    <span className="price">$666</span>
                </div>
            </div>
        </>
    );
};

export default Product;
