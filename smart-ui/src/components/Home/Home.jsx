import { useEffect } from 'react';
import { fetchDataFromApi } from '../../utils/api';

import Banner from '../Home/Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';

import './Home.scss';
const Home = () => {
    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        fetchDataFromApi('/api/categories?populate=*').then((res) => console.log(res));
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products headingText="Popular Products" />
                </div>
            </div>
        </div>
    );
};

export default Home;
