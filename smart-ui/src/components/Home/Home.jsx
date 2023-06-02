import { useEffect, useContext } from 'react';
import { fetchDataFromApi } from '../../utils/api';
import { Context } from '../../utils/context';

import Banner from '../Home/Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';

import './Home.scss';
const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getProducts = () => {
        fetchDataFromApi('/api/products?populate=*').then((res) => {
            console.log(res);
            setProducts(res);
        });
    };

    const getCategories = () => {
        fetchDataFromApi('/api/categories?populate=*').then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} /> {/**nhận prop categories */}
                    <Products products={products} headingText="Popular Products" />
                </div>
            </div>
        </div>
    );
};

export default Home;
